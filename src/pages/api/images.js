// pages/api/images.js
import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const folderId = '1GILUsYBzbT0LjWL9aS1BVpmityonttYo'; // Replace with your actual folder ID

            // Initialize Google Drive API
            const auth = new google.auth.GoogleAuth({
                credentials: {
                    client_email: process.env.GOOGLE_CLIENT_EMAIL,
                    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    project_id: process.env.GOOGLE_PROJECT_ID,
                },
                scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            });

            const drive = google.drive({ version: 'v3', auth: await auth.getClient() });

            // List files from the specified Google Drive folder
            const response = await drive.files.list({
                pageSize: 20,
                fields: 'nextPageToken, files(id, name, mimeType, webContentLink, thumbnailLink)',
                q: `'${folderId}' in parents and (mimeType='image/jpeg' or mimeType='image/png')`,
            });

            // Process the response to get image URLs
            const images = response.data.files.map(file => {
                return { id: file.id, title: file.name, url: file.webViewLink };
            });

            res.status(200).json(images);
        } catch (error) {
            console.error('The API returned an error: ' + error);
            res.status(500).send(error.toString());
        }
    } else {
        // Handle any other HTTP methods
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
