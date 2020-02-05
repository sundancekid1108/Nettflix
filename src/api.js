import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
      language: 'en-US'    
  }
});

// api.get('/genre/movie/list', {params: {api_key: API_KEY}}).then(response => { 
// 	console.log(response);
// })
// .catch(error => {
//     console.log(error.response);
//     console.log(API_KEY);
// });

// api.get('/genre/tv/list', {params: {api_key: API_KEY}}).then(response => { 
// 	console.log(response);
// })
// .catch(error => {
//     console.log(error.response);
//     console.log(API_KEY);
// });
// api.get('movie/popular', {params: {api_key: API_KEY}}).then(response => { 
// 	console.log(response);
// })
// .catch(error => {
//     console.log(error.response);
//     console.log(API_KEY);
// });
/**
 * 키 넘어가는것 확인..
 */


export const movieApi = {
  getMovieDetail: (id) =>
    api.get(`movie/${id}?api_key=${API_KEY}`, { params: { append_to_response: "videos" } }).catch(error => {
      console.log(error.response)
    }),
  getPopular: () => api.get('movie/popular', {params: {api_key: API_KEY}}).catch(error => {
    console.log(error.response)
  }),
  getUpcoming: () => api.get(`movie/upcoming?api_key=${API_KEY}`).catch(error => {
    console.log(error.response)
  }),
  getNowPlaying: () => api.get(`movie/now_playing?api_key=${API_KEY}`).catch(error => {
    console.log(error.response)
  }),
  searchMovies: (term) =>
    api.get(`search/movie?api_key=${API_KEY}`, {
      params: {
        query: encodeURIComponent(term)
      }
    }).catch(error => {
    console.log(error.response)
  })
};

/**
 * encodeURIComponent => 검색어 인코딩해줌
 */

export const tvApi = {
  getTvDetail: (id) =>
    api.get(`tv/${id}?api_key=${API_KEY}`, { params: { append_to_response: "videos" } }).catch(error => {
      console.log(error.response)
    }),
  getPopular: () => api.get('tv/popular', {params: {api_key: API_KEY}}).catch(error => {
      console.log(error.response)
    }),
  getTopRated: () => api.get(`tv/top_rated?api_key=${API_KEY}`).catch(error => {
      console.log(error.response)
    }),
  getAiringToday: () => api.get(`tv/airing_today?api_key=${API_KEY}`).catch(error => {
      console.log(error.response)
    }),
  searchTv: (term) =>
    api.get(`search/tv?api_key=${API_KEY}`, {
      params: {
        query: encodeURIComponent(term)
      }
    }).catch(error => {
      console.log(error.response)
    })
};


