import React from "react";
import { ActivityIndicator, View } from "react-native";
import MovieListView from "../components/MovieListView";
import Header from "../components/Header";
import { getMovieDetails, searchMovie } from "../api/API";
import styles from "../styles/styles";

class HomeScreen extends React.Component {
  state = {
    isLoading: false,
    movies: [],
  };

  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: (props) => (
        <Header
          {...props}
          title={"Movie Browser"}
          onSearchSubmit={this.onSearchSubmit}
        />
      ),
      headerStyle: {
        height: 120,
      },
    });
  }

  onSearchSubmit = async (searchArgument) => {
    this.setState({ isLoading: true });
    console.log(
      `Making network request for searchMovie from onSearchSubmit in HomeScreen.js with argument: ${searchArgument}`
    );
    const searchResult = await searchMovie(searchArgument);
    if (searchResult.Response === "True") {
      this.setState({ isLoading: false, movies: searchResult.results });
    } else {
      this.setState({ isLoading: false, movies: [] });
    }
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
      <View style={styles.homeScreenContainer}>
        <MovieListView
          movies={this.state.movies}
          onMovieItemPress={this.handleListItemPress}
        />
      </View>
    );
  }
}

export default HomeScreen;
