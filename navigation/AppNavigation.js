import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen
        name="MovieDetails"
        options={({ route }) => ({ title: route.params.title })}
        component={MovieDetailsScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
