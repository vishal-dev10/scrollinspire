import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Adjust as needed for production

const backendUrl = 'https://trademate-backend.onrender.com/api';

export const flattradeLogin = async (username, password, panOrDob) => {
    const response = await axios.post(`${backendUrl}/flattrade/login/`, { username, password, panOrDob });
    return response.data;
};

export const generateAccessToken = async (requestCode) => {
    const response = await axios.post(`${backendUrl}/flattrade/generate-token/`, { request_code: requestCode });
    return response.data;
};

export const fetchTradebook = async (token) => {
    const response = await axios.post(`${backendUrl}/flattrade/tradebook/`, { token });
    return response.data;
};

export const getItems = async () => {
    const response = await axios.get(`${API_BASE_URL}/items/`);
    return response.data;
};

export const createItem = async (item) => {
    const response = await axios.post(`${API_BASE_URL}/items/`, item);
    return response.data;
};
