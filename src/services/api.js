import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
});

export const fetchSomething = () => API.get('/something');
export const postSomething = (data) => API.post('/something', data);
