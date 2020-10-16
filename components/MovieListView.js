import React from "react";
import { SectionList, Text } from "react-native";
import PropTypes from "prop-types";

import RowItem from "./RowItem";

const renderItem = ({ section, item }) => (
  <RowItem movie={item} onMovieItemPress={section.onMovieItemPress} />
);

const MovieListView = (props) => {
  const list = props.movies;

  const moviesByYear = list.reduce((obj, movie) => {
    const year = movie.Year;
    return {
      ...obj,
      [year]: [...(obj[year] || []), movie],
    };
  }, {});

  const onMovieItemPress = props.onMovieItemPress;

  const sections = Object.keys(moviesByYear).map((year) => ({
    data: moviesByYear[year],
    title: year,
    onMovieItemPress,
  }));

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
    />
  );
};

MovieListView.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieItemPress: PropTypes.func.isRequired,
};

export default MovieListView;
