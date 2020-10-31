import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import MovieListView from "../components/MovieListView";
import { getMovieDetails } from "../api/API";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignContent: "space-between",
    backgroundColor: "#fff",
  },
});

class HomeScreen extends React.Component {
  state = {
    isLoading: false,
  };

  handleListItemPress = (movie) => {
    this.setState({ isLoading: true });
    this.fetchMovieDetails(movie.key);
  };

  fetchMovieDetails = async (movieId) => {
    console.log(
      `Making network request for getMovieDetails from fetchMovieDetails in HomeScreen.js with argument ${movieId}`
    );
    const result = await getMovieDetails(movieId);
    this.setState({ isLoading: false });
    const navigation = this.props.navigation;
    navigation.navigate("MovieDetails", {
      title: result.Title,
      movie: result,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#f00" />;
    }
    return (
      <View style={styles.container}>
        {
          <MovieListView
            movies={this.props.movies}
            onMovieItemPress={this.handleListItemPress}
          />
        }
      </View>
    );
  }
}

export default HomeScreen;
