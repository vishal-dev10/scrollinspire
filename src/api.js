import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Adjust as needed for production

export const getItems = async () => {
    const response = await axios.get(`${API_BASE_URL}/items/`);
    return response.data;
};

export const createItem = async (item) => {
    const response = await axios.post(`${API_BASE_URL}/items/`, item);
    return response.data;
};
