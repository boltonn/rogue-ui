import axios from 'axios';

// create axios endpoint with allowed CORS
const rogueBackend = axios.create({
    baseURL: process.env.BACKEND_URL,
});

export default rogueBackend;