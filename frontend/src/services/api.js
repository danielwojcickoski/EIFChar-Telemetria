import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://eifchar.herokuapp.com/3333' : 'http://localhost:3333',
})

export default api;