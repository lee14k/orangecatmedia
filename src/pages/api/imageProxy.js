import fetch from 'node-fetch';

export default async function imageProxy(req, res) {
    const { imageId } = req.query; // Or however you wish to receive the image identifier

    try {
        const url = `https://drive.google.com/uc?id=${imageId}&export=download`;
        const imageResponse = await fetch(url);

        if (!imageResponse.ok) {
            throw new Error('Failed to fetch image');
        }

        res.setHeader('Content-Type', imageResponse.headers.get('content-type'));
        res.setHeader('Content-Length', imageResponse.headers.get('content-length'));

        imageResponse.body.pipe(res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
