import React from "react";

import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { searchMovie } from "./api/API";

import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import Header from "./screens/Header";

const AppStack = createStackNavigator();

class App extends React.Component {
  state = {
    movies: [],
  };

  onSearchSubmit = async (searchArgument) => {
    console.log(
      `Making network request for searchMovie from onSearchSubmit in App.js with argument: ${searchArgument}`
    );
    const searchResult = await searchMovie(searchArgument);
    if (searchResult.Response === "True") {
      this.setState({ movies: searchResult.results });
    } else {
      this.setState({ movies: [] })
    }
  };

  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen
            name="Home"
            options={{
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
            }}
          >
            {(props) => <HomeScreen {...props} movies={this.state.movies} />}
          </AppStack.Screen>
          <AppStack.Screen
            name="MovieDetails"
            options={({ route }) => ({ title: route.params.title })}
            component={MovieDetailsScreen}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
