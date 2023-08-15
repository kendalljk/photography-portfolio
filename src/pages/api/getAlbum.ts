import type { NextApiRequest, NextApiResponse } from 'next';
const FLICKR_API = "https://api.flickr.com/services/rest/";
const FLICKR_API_KEY = process.env.FLICKR_API_KEY;
const userId = process.env.USER_ID;

interface Album {
  id: string;
}

const getAlbum = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const albumId = req.query.id as string;
    const response = await fetch(`${FLICKR_API}?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${albumId}&user_id=${userId}&format=json&nojsoncallback=1`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    const albums = data.photoset.photo;
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getAlbum