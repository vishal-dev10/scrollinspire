import axios from 'axios';

const API_KEY = 'your_api_key';
const API_SECRET = 'your_api_secret';

export const flattradeLogin = async (username, password, panOrDob) => {
    const response = await axios.post('https://auth.flattrade.in/?app_key=' + API_KEY, {
        username,
        password,
        panOrDob
    });
    return response.data;
};

export const generateAccessToken = async (requestCode) => {
    const hash = sha256(API_KEY + requestCode + API_SECRET);
    const response = await axios.post('https://authapi.flattrade.in/trade/apitoken', {
        api_key: API_KEY,
        request_code: requestCode,
        api_secret: hash
    });
    return response.data;
};

export const fetchTradebook = async (token) => {
    const response = await axios.get('https://api.flattrade.in/tradebook', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

const sha256 = (message) => {
    // Implement SHA-256 hashing function or use a library
    // This is a placeholder function
    return 'hashed_message';
};
