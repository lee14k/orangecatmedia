// pages/api/proxy-image.js

import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { imageId } = req.query;
        const url = `https://drive.google.com/uc?id=${imageId}&export=download`;

        try {
            const response = await fetch(url);

            // Ensure the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }

            const data = await response.blob();
            res.setHeader('Content-Type', response.headers.get('content-type'));
            res.send(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        // Handle non-GET requests
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
