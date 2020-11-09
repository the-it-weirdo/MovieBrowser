const apikeyfile = require("./apikey.json");
const apikey = apikeyfile.apikey;

const API_PARAM = `&apikey=${apikey}`;
const BASE_URL = "http://www.omdbapi.com/?";
const SEARCH_PARAM = (argument) => `&s=${argument}`;
const MOVIE_ID_PARAM = (movieId) => `&i=${movieId}`;
const PAGE_PARAM = (page) => `&page=${page}`;

export const RESPONSE_STATE = [
  "OK",
  "ERROR_NO_RESULT",
  "FETCH_ERROR",
  "UNKNOWN_ERROR_POSSIBLE_NO_INTERNET",
];

// {"Title":"Guardians of the Galaxy","Year":"2014","imdbID":"tt2015381","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"}
const processMovies = (obj) => ({
  key: obj.imdbID,
  Title: obj.Title,
  Year: obj.Year,
  Poster: obj.Poster,
});

export const searchMovie = async (searchQuery, page = 1) => {
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
    const { Search, totalResults, Response, Error } = await response.json();
    if (Response === "True") {
      return {
        results: Search.map(processMovies),
        totalResults,
        Response: RESPONSE_STATE[0],
        errMessage: "",
      };
    } else {
      if (Error === "Too many results.") {
        return {
          results: [],
          totalResults: 0,
          Response: RESPONSE_STATE[1],
          errMessage: Error,
        };
      } else {
        return {
          results: [],
          totalResults: 0,
          Response: RESPONSE_STATE[2],
          errMessage: Error,
        };
      }
    }
  } catch (err) {
    return {
      results: [],
      totalResults: 0,
      Response: RESPONSE_STATE[3],
      errMessage: err.message,
    };
  }
};

export const getMovieDetails = async (movieId) => {
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
