import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 2,
    borderRadius: 5,
    marginVertical: 5,
  },
  item: {
    width: "75%",
    justifyContent: "center",
  },
  poster: {
    width: "25%",
    height: 75,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  year: {
    fontStyle: "italic",
    color: "gray",
  },
});

const Row = (props) => {
  const movie = props.movie;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.onMovieItemPress(movie);
      }}
    >
      <Image
        style={styles.poster}
        source={{
          uri: movie.Poster,
        }}
        resizeMode="contain"
      />
      <View style={styles.item}>
        <Text style={styles.title}>{movie.Title}</Text>
        <Text style={styles.year}>{movie.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
