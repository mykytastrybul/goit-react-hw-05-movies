import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export function getTrending() {
  return axios
    .get('/trending/movie/day?api_key=db6eb2b51232edce925b9a8998cdbd90')
    .then(({ data }) => data.results);
}

export function getMovie(id) {
  return axios
    .get(`/movie/${id}?api_key=db6eb2b51232edce925b9a8998cdbd90&language=en-US`)
    .then(({ data }) => data);
}
export function getSearchMovie(query) {
  return axios
    .get(
      `/search/movie?api_key=db6eb2b51232edce925b9a8998cdbd90&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(({ data }) => data.results);
}

export function getMovieCast(id) {
  return axios
    .get(
      `/movie/${id}/credits?api_key=db6eb2b51232edce925b9a8998cdbd90&language=en-US`
    )
    .then(({ data }) => data.cast);
}

export function getMovieReviews(id) {
  return axios
    .get(
      `/movie/${id}/reviews?api_key=db6eb2b51232edce925b9a8998cdbd90&language=en-US`
    )
    .then(({ data }) => data.results);
}
