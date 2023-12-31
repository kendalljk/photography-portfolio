import type { NextApiRequest, NextApiResponse } from 'next';
const FLICKR_API = "https://api.flickr.com/services/rest/";
const FLICKR_API_KEY = process.env.FLICKR_API_KEY;
const userId = process.env.USER_ID;

interface Album {
    id: string;
  title: {
    _content: string;
  }
}

const getRecents = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(`${FLICKR_API}?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${userId}&format=json&nojsoncallback=1`)

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    const albums: Album[] = data.photosets.photoset;


    res.json(albums);
} catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
    } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}
};

export default getRecents;
