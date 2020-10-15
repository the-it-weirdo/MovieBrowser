import React from "react";
import MovieView from "../components/MovieView";

const MovieDetailsScreen = ({ route }) => {
  return <MovieView moviedata={route.params.movie} />;
};

export default MovieDetailsScreen;
