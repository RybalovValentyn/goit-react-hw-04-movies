const BASE_URL = ' https://api.themoviedb.org/3/movie/popular?api_key=';
const Key = 'e7d10f6c3b01c863e408d25d6d0fc59c'
const Config ={
    language: 'en-US',
    page: 1
}

async function fetcMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchHomeMovies() {
  return fetcMovies(`${BASE_URL}${Key}&language=${Config.language}&page=${Config.page}`);
}

export function fetchMuvieViews(movieId) {
  return fetcMovies(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=e7d10f6c3b01c863e408d25d6d0fc59c&language=en-US&page=1`);

}

export function fetchMuvieById(movieId) {
  // return fetcMovies(`${SearchURL}{${movieId}}?api_key=${Key}&language=en-US`);
  return fetcMovies(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e7d10f6c3b01c863e408d25d6d0fc59c&language=en-US`)

}

export function fetchMuvieCastiews(movieId) {
  return fetcMovies(`https://api.themoviedb.org/3/movie//${movieId}/credits?api_key=e7d10f6c3b01c863e408d25d6d0fc59c&language=en-US`);

}

export function fetchMuvieSearch(searchQuery) {
  return fetcMovies(`
 

 
https://api.themoviedb.org/3/search/movie?api_key=e7d10f6c3b01c863e408d25d6d0fc59c&language=en-US&query=${searchQuery}&page=1&include_adult=false`);

}