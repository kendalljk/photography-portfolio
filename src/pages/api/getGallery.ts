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

const getGallery = async (req: NextApiRequest, res: NextApiResponse) => {
  const title = req.query.title;
  const page = Number(req.query.page) || 1;

  try {
    const response = await fetch(`${FLICKR_API}?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${userId}&format=json&nojsoncallback=1&per_page=50&page=${page}`)

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    const albums: Album[] = data.photosets.photoset;

    // Filter albums by title if the title query parameter is provided
    const filteredAlbums = title ? albums.filter((album: Album) => album.title._content === title) : albums;

    if (filteredAlbums) {
      try {

      } catch (error) {

      }
    }

    res.json(filteredAlbums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getGallery;
