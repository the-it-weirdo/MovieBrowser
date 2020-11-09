import React from "react";
import { ActivityIndicator, View, Alert } from "react-native";
import MovieListView from "../components/MovieListView";
import Header from "../components/Header";
import GraphicalUIResponse from "../components/GraphicalUIResponse";
import notFound from "../assets/not-found.png";
import sad from "../assets/sad.png";
import wavingHand from "../assets/waving-hand.png";
import { getMovieDetails, searchMovie, RESPONSE_STATE } from "../api/API";
import styles from "../styles/styles";

const renderGraphicalUIResponse = (firstLoad, response) => {
  let imageSource = "";
  let text = "";

  if (firstLoad) {
    text = "Hello there,\nGo ahead and search some movies.";
    imageSource = wavingHand;
  } else {
    switch (response) {
      case RESPONSE_STATE[1]:
        text =
          "Sorry, couldn't find anything. Please try again with a different keyword.";
        imageSource = notFound;
        break;
      case RESPONSE_STATE[2]:
        text =
          "OOPS!! It's not you. It's us. Something is bad in our server. Try again later.";
        imageSource = sad;
        break;
      case RESPONSE_STATE[3]:
        text =
          "Something went wrong. Are you sure you have an active Internet connection ?";
        imageSource = sad;
        break;
      default:
        break;
    }
    text += `\n\nError: ${response}`;
  }

  return <GraphicalUIResponse text={text} imageSource={imageSource} />;
};

class HomeScreen extends React.Component {
  state = {
    isLoading: false,
    firstLoad: true,
    responseState: RESPONSE_STATE[0],
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
    if (!searchArgument) {
      Alert.alert("Search Argument cannot be empty!");
      return;
    }
    this.setState({ isLoading: true, firstLoad: false });
    console.log(
      `Making network request for searchMovie from onSearchSubmit in HomeScreen.js with argument: ${searchArgument}`
    );
    const searchResult = await searchMovie(searchArgument);
    this.setState({
      isLoading: false,
      movies: searchResult.results,
      responseState: searchResult.Response,
    });
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
          listEmptyComponent={renderGraphicalUIResponse(
            this.state.firstLoad,
            this.state.responseState
          )}
          onMovieItemPress={this.handleListItemPress}
          imageStyle={{ width: 100, height: 100, margin: 30 }}
        />
      </View>
    );
  }
}

export default HomeScreen;
