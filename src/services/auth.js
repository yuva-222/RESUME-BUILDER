import axios from 'axios';

const AUTH_API = axios.create({
  baseURL: 'https://api.example.com/auth', // Replace with your Auth API base URL
});

export const login = (credentials) => AUTH_API.post('/login', credentials);
export const register = (userDetails) => AUTH_API.post('/register', userDetails);
export const getCurrentUser = () => AUTH_API.get('/current-user');
