import React from "react";

import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { search, movie } from "./mockData";

import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import HomeScreen from "./screens/HomeScreen";

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen name="Home">
          {(props) => <HomeScreen {...props} moviedetails={{ movie }} movies={search.Search} />}
        </AppStack.Screen>
        <AppStack.Screen
          name="MovieDetails"
          options={({ route }) => ({ title: route.params.title })}
          component={MovieDetailsScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

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
