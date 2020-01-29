<<<<<<< HEAD
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const APIKEY = process.env.REACT_APP_MOVIE_API_KEY
=======
import axios from 'axios';
>>>>>>> fc3646c29ce1f5114bb35c592622738521247714

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
<<<<<<< HEAD
      api_key: APIKEY,
      language: 'en-US'    
  }
});


// api.get('movie/popular').then(response => { 
// 	console.log(response)
// })
// .catch(error => {
//     console.log(error.response)
// });
// //왜 인지 모르겠으나 Invailed key로 Error

// api.get(`tv/popular?api_key=${APIKEY}`).then(response => { 
// 	console.log(response)
// })
// .catch(error => {
//     console.log(error.response)
// });


export const moviesApi = {
  getMovie: (id) =>
    api.get(`movie/${id}?api_key=${APIKEY}`, { params: { append_to_response: "videos" } }).catch(error => {
      console.log(error.response)
    }),
  getPopular: () => api.get(`movie/popular?api_key=${APIKEY}`).catch(error => {
    console.log(error.response)
  }),
  getUpcoming: () => api.get(`movie/upcoming?api_key=${APIKEY}`).catch(error => {
    console.log(error.response)
  }),
  getNowPlaying: () => api.get(`movie/now_playing?api_key=${APIKEY}`).catch(error => {
    console.log(error.response)
  }),
  searchMovies: (term) =>
    api.get(`search/movie?api_key=${APIKEY}`, {
      params: {
        query: encodeURIComponent(term)
      }
    }).catch(error => {
    console.log(error.response)
  })
};

export const tvApi = {
  getShow: (id) =>
    api.get(`tv/${id}?api_key=${APIKEY}`, { params: { append_to_response: "videos" } }).catch(error => {
      console.log(error.response)
    }),
  getPopular: () => api.get(`tv/popular?api_key=${APIKEY}`).catch(error => {
      console.log(error.response)
    }),
  getTopRated: () => api.get(`tv/top_rated?api_key=${APIKEY}`).catch(error => {
      console.log(error.response)
    }),
  getAiringToday: () => api.get(`tv/airing_today?api_key=${APIKEY}`).catch(error => {
      console.log(error.response)
    }),
  searchTv: (term) =>
    api.get(`search/tv?api_key=${APIKEY}`, {
      params: {
        query: encodeURIComponent(term)
      }
    }).catch(error => {
      console.log(error.response)
    })
};


=======
    api_key: 'f40268da21bdf3d65eac97928a67b394',
    language: 'en-US'
  }
});

api.get('tv/popular');

export default api;
>>>>>>> fc3646c29ce1f5114bb35c592622738521247714
