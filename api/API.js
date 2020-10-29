const apikeyfile = require("./apikey.json");
const apikey = apikeyfile.apikey;

const API_PARAM = `&apikey=${apikey}`;
const BASE_URL = "http://www.omdbapi.com/?";
const SEARCH_PARAM = (argument) => `&s=${argument}`;
const MOVIE_ID_PARAM = (movieId) => `&i=${movieId}`;
const PAGE_PARAM = (page) => `&page=${page}`;

// {"Title":"Guardians of the Galaxy","Year":"2014","imdbID":"tt2015381","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"}
const processMovies = (obj) => ({
  key: obj.imdbID,
  Title: obj.Title,
  Year: obj.Year,
  Poster: obj.Poster,
});

const searchMovie = async (searchQuery, page = 1) => {
  let urlString = "";
  if (page === 1) {
    urlString = `${BASE_URL}${API_PARAM}${SEARCH_PARAM(searchQuery)}`;
  } else {
    urlString = `${BASE_URL}${API_PARAM}${SEARCH_PARAM(
      searchQuery
    )}${PAGE_PARAM(page)}`;
  }
  try {
    const response = await fetch(urlString);
    const { Search, totalResults, Response } = await response.json();
    return { results: Search.map(processMovies), totalResults, Response };
  } catch (err) {
    return { Response: false, errMessage: err.message };
  }
};

const getMovieDetails = async (movieId) => {
  const urlString = `${BASE_URL}${API_PARAM}${MOVIE_ID_PARAM(movieId)}`;
  try {
    const response = await fetch(urlString);
    const result = await response.json();
    return result;
  } catch (err) {
    return { Response: false, errMessage: err.message };
  }
};

// searchMovie("galaxy");
// searchMovie("galaxy", 2);
