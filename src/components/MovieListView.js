import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

import RowItem from "./RowItem";

const renderItem = ({ item }) => {
  return <RowItem movie={item} onMovieItemPress={item.onMovieItemPress} />;
};

const MovieListView = (props) => {
  const list = props.movies;

  const data = list.map((obj) => {
    return {
      ...obj,
      onMovieItemPress: props.onMovieItemPress,
    };
  });

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}
      ListEmptyComponent={props.listEmptyComponent}
    />
  );
};

MovieListView.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieItemPress: PropTypes.func.isRequired,
};

export default MovieListView;
