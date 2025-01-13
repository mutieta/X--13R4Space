const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = 'vnoaoLR3rJQnYM0wfwSWTnssu967Vp173oqakocY';
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${vnoaoLR3rJQnYM0wfwSWTnssu967Vp173oqakocY}`;

async function fetchAPOD() {
    try {
        const response = await axios.get(APOD_URL);
        const { date, title, explanation, url, media_type } = response.data;

        console.log(`Title: ${title}`);
        console.log(`Date: ${date}`);
        console.log(`Explanation: ${explanation}`);
        console.log(`URL: ${url}`);

        if (media_type === 'image') {
            console.log('This is an image.');
        } else if (media_type === 'video') {
            console.log('This is a video.');
        }
    } catch (error) {
        console.error('Error fetching APOD data:', error.message);
    }
}

fetchAPOD();
