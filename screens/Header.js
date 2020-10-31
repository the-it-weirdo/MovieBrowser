import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PropTypes from "prop-types";

import SearchView from "../components/SearchView";

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});

const Header = (props) => {
//   const headerHeight = useHeaderHeight();
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitleStyle}>{props.title}</Text>
      <SearchView onSearchSubmit={props.onSearchSubmit} />
    </View>
  );
};

export default Header;
