import axios from 'axios';

const api = axios.create({
    baseURL: 'http://64.227.185.18/api/v1',
});

export default api;