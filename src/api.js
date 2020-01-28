import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const APIKEY = process.env.REACT_APP_MOVIE_API_KEY

const PARAMS = {
  params: {
    api_key: APIKEY,
    language: 'en-US'
  }
};

const api = axios.create({
  baseURL:  "https://api.themoviedb.org/3/",
  PARAMS,
});



api.get('movie/popular').then(response => { 
	console.log(response)
})
.catch(error => {
    console.log(error.response)
});

api.get(`https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=en-US`).then(response => { 
	console.log(response)
})
.catch(error => {
    console.log(error.response)
});


export default api;