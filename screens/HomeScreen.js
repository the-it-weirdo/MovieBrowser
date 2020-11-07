import React from "react";
import { ActivityIndicator, View } from "react-native";
import MovieListView from "../components/MovieListView";
import Header from "../components/Header";
import GraphicalUIResponse from "../components/GraphicalUIResponse";
import notFound from "../assets/not-found.png";
import sad from "../assets/sad.png";
import wavingHand from "../assets/waving-hand.png";
import { getMovieDetails, searchMovie } from "../api/API";
import styles from "../styles/styles";

const RESPONSE = ["FIRST_LOAD", "ERROR_NO_RESULT", "ERROR_NO_INTERNET"];

const renderGraphicalUIResponse = (response) => {
  let imageSource = "";
  let text = "";

  switch (response) {
    case RESPONSE[0]:
      text = "Hello there,\nGo ahead and search some movies.";
      imageSource = wavingHand;
      break;
    case RESPONSE[1]:
      text =
        "Sorry, couldn't find anything. Please try again with a different keyword.";
      imageSource = notFound;
      break;
    case RESPONSE[2]:
      text =
        "OOPS!! Looks like your internet is not working. Please retry with an active Internet Connection.";
      imageSource = sad;
      break;
    default:
      break;
  }

  return <GraphicalUIResponse text={text} imageSource={imageSource} />;
};

class HomeScreen extends React.Component {
  state = {
    isLoading: false,
    response: RESPONSE[0],
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
      return (
        <ActivityIndicator style={{ margin: 100 }} size="large" color="#f00" />
      );
    }
    return (
      <View style={styles.homeScreenContainer}>
        <MovieListView
          movies={this.state.movies}
          listEmptyComponent={renderGraphicalUIResponse(this.state.response)}
          onMovieItemPress={this.handleListItemPress}
          imageStyle={{ width: 100, height: 100, margin: 30 }}
        />
      </View>
    );
  }
}

export default HomeScreen;
