import type { NextApiRequest, NextApiResponse } from 'next';
const FLICKR_API = "https://api.flickr.com/services/rest/";
const FLICKR_API_KEY = process.env.FLICKR_API_KEY;
const userId = process.env.USER_ID;

interface Album {
  id: string;
}

const getShowcase = async (req: NextApiRequest, res: NextApiResponse) => {

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


const fetchShowcasePhotos = async () => {
    try {
        const apiKey = 'YOUR_FLICKR_API_KEY'; // Replace with your actual Flickr API key
        const showcaseId = 'YOUR_FLICKR_SHOWCASE_ID'; // Replace with the ID of your Flickr showcase
        const response = await fetch(
            `https://www.flickr.com/services/rest/?method=flickr.showcase.getPhotos&api_key=${apiKey}&showcase_id=${showcaseId}&format=json&nojsoncallback=1`
        );
        const data = await response.json();

        // Process the data as needed
        // For example, you can set the photos in your state
        setWelcomePhotos(data.photos.photo);
    } catch (err) {
        setError(err?.toString() || "An error occurred");
    }
};
