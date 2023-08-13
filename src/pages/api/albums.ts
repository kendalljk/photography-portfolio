import type { NextApiRequest, NextApiResponse } from 'next';

const getAlbums = async (req: NextApiRequest, res: NextApiResponse) => {
  const FLICKR_API = "https://api.flickr.com/services/rest/";
  const FLICKR_API_KEY = process.env.FLICKR_API_KEY;
  const userId = process.env.USER_ID;

  console.log(FLICKR_API_KEY)
  console.log(userId)

  try {
    const response = await fetch(`${FLICKR_API}?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${userId}&format=json&nojsoncallback=1`);

    if (!response.ok) {
  throw new Error(`An error occurred: ${response.statusText}`);
}

    const data = await response.json();

    res.json(data.photosets.photoset);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getAlbums;