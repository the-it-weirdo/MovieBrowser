import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/styles";

const MovieView = (props) => {
  let movie = props.movie;
  return (
    <View style={styles.movieDetailsContainer}>
      <View style={styles.movieDetailsItem}>
        <Image
          style={styles.poster}
          source={{
            uri: movie.Poster,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.movieDetailsItem}>
        <Text style={styles.detailItem}>{movie.Released}</Text>
        <Text style={styles.detailItem}>{movie.Rated}</Text>
        <Text style={styles.detailItem}>{movie.Runtime}</Text>
        <Text style={styles.detailItem}>{movie.Genre}</Text>
        <Text style={styles.detailItem}>{movie.Year}</Text>
      </View>
      <Text style={styles.movieTitle}>{movie.Title}</Text>
      <Text style={{ ...styles.directorAndWriter, ...styles.detailItem }}>
        Directed by: {movie.Director}
      </Text>
      <Text style={{ ...styles.directorAndWriter, ...styles.detailItem }}>
        Written by: {movie.Writer}
      </Text>
      <Text>Starring: {movie.Actors}</Text>
      <Text>{movie.Plot}</Text>
      <Text>Ratings: {movie.imdbRating}</Text>
    </View>
  );
};

MovieView.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieView;
