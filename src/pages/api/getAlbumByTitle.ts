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

const getAlbumByTitle = async (req: NextApiRequest, res: NextApiResponse) => {
  const title = req.query.title;

  try {
    const response = await fetch(`${FLICKR_API}?method=flickr.photosets.getList&api_key=${FLICKR_API_KEY}&user_id=${userId}&format=json&nojsoncallback=1`);

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    const albums: Album[] = data.photosets.photoset;

    if (title) {
      const matchingAlbum = albums.find((album) => album.title._content === title);

      if (matchingAlbum) {
        const albumId = matchingAlbum.id;
        // Call the getAlbum function to get photos from the specified album
        const albumResponse = await fetch(`${FLICKR_API}?method=flickr.photosets.getPhotos&api_key=${FLICKR_API_KEY}&photoset_id=${albumId}&user_id=${userId}&format=json&nojsoncallback=1`);

        if (!albumResponse.ok) {
          throw new Error(`An error occurred: ${albumResponse.statusText}`);
        }

        const albumData = await albumResponse.json();
        const photos = albumData.photoset.photo;

        res.json(photos);
      } else {
        res.status(404).json({ error: `Album with title '${title}' not found.` });
      }
    } else {
      res.json(albums);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getAlbumByTitle;