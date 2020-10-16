import React from "react";
import MovieView from "../components/MovieView";

const MovieDetailsScreen = ({ route }) => {
  return <MovieView movie={route.params.movie} />;
};

export default MovieDetailsScreen;
