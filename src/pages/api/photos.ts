import type { NextApiRequest, NextApiResponse } from 'next';
const FLICKR_API = "https://api.flickr.com/services/rest/";
const FLICKR_API_KEY = process.env.FLICKR_API_KEY;
const userId = process.env.USER_ID;

interface Album {
  title: {
    _content: string;
  }
}

const getSongs = async (req: NextApiRequest, res: NextApiResponse) => {
  const title = req.query.title;

  try {
    const response = await fetch(`${FLICKR_API}?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${userId}&format=json&nojsoncallback=1`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    const albums = data.photosets.photoset;

    // Find the album by title if the title query parameter is provided
    const album = title ? albums.find((album: Album) => album.title._content === title) : null;

    if (album) {
      // Fetch the photos if album is provided
      const photosResponse = await fetch(`${FLICKR_API}?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${album.id}&user_id=${userId}&format=json&nojsoncallback=1`);
      const photosData = await photosResponse.json();
      res.json(photosData.photoset.photo);
    } else {
      res.json([]); // Return an empty array if no album is found
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getSongs