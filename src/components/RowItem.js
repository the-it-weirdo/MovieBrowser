import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/styles";

const RowItem = (props) => {
  const movie = props.movie;
  return (
    <TouchableOpacity
      style={styles.rowItemContainer}
      onPress={() => {
        props.onMovieItemPress(movie);
      }}
    >
      <Image
        style={styles.rowItemPoster}
        source={{
          uri: movie.Poster,
        }}
        resizeMode="contain"
      />
      <View style={styles.rowItemViewItem}>
        <Text style={styles.rowItemTitle}>{movie.Title}</Text>
        <Text style={styles.rowItemYear}>{movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

RowItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default RowItem;
