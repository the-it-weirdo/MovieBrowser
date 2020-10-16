import React from "react";
import { Button, View, StyleSheet } from "react-native";
import RowItem from "../components/RowItem";
import MovieListView from "../components/MovieListView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignContent: "space-between",
    backgroundColor: "#fff",
  },
});

class HomeScreen extends React.Component {
  handleButtonPress = (movie) => {
    const navigation = this.props.navigation;
    navigation.navigate("MovieDetails", {
      title: movie.Title,
      movie,
    });
  };

  render() {
    this.props.movies[0] = this.props.moviedetails.movie;
    return (
      <View style={styles.container}>
        <MovieListView
          movies={this.props.movies}
          onMovieItemPress={this.handleButtonPress}
        />
        {
          //<Button title="Click Me" onPress={this.handleButtonPress} />
          //   <RowItem
          //   movie={this.props.moviedetails.movie}
          //   onMovieItemPress={this.handleButtonPress}
          // />
          // <RowItem
          //   movie={{
          //     ...this.props.moviedetails.movie,
          //     Title: "Some Random Title",
          //   }}
          //   onMovieItemPress={this.handleButtonPress}
          // />
        }
      </View>
    );
  }
}

export default HomeScreen;
