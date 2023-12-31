import type { NextApiRequest, NextApiResponse } from 'next';
const FLICKR_API = "https://api.flickr.com/services/rest/";
const FLICKR_API_KEY = process.env.FLICKR_API_KEY;
const userId = process.env.USER_ID;

interface Album {
  id: string;
}

const getAlbum = async (req: NextApiRequest, res: NextApiResponse) => {
  const page = Number(req.query.page) || 1;
  const perPage = 50



  try {
    const albumId = req.query.id as string;
    const response = await fetch(`${FLICKR_API}?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${albumId}&user_id=${userId}&format=json&nojsoncallback=1&per_page=${perPage}&page=${page}`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    const photos = data.photoset.photo;
    const hasMore = data.photoset.total > page * perPage;

    res.status(200).json({photos, hasMore});
} catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
    } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}
};

export default getAlbum