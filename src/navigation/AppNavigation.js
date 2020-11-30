import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import AppAboutScreen from "../screens/AppAboutScreen";

const AppStack = createStackNavigator();

const AppStackNavigator = () => {
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

const BottomTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Movies") {
            iconName = "search";
          } else if (route.name === "About") {
            iconName = focused ? "info" : "info-outline";
          }
          size += 10;
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#00aaff",
        inactiveTintColor: "gray",
      }}
    >
      <BottomTab.Screen name="Movies" component={AppStackNavigator} />
      <BottomTab.Screen name="About" component={AppAboutScreen} />
    </BottomTab.Navigator>
  );
};

export default AppNavigator;
