import type { NextApiRequest, NextApiResponse } from 'next';
const FLICKR_API = "https://api.flickr.com/services/rest/";
const FLICKR_API_KEY = process.env.FLICKR_API_KEY;
const userId = process.env.USER_ID;

interface Photo {
  id: string;
}

const getPhoto = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const photoId = req.query.id as string;
const response = await fetch(`${FLICKR_API}?method=flickr.photos.getInfo&api_key=${FLICKR_API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    const photo = data.photo;
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getPhoto