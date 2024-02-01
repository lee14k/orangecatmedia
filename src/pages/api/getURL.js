// pages/api/get-upload-url.js
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Logic to integrate with Vercel Blob to generate a signed URL
            const signedUrl = /* Your logic to get a signed URL */;
            res.status(200).json({ url: signedUrl });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
