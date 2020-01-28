import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f40268da21bdf3d65eac97928a67b394',
    language: 'en-US'
  }
});

api.get('tv/popular');

export default api;