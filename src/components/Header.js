import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import SearchView from "./SearchView";
import styles from "../styles/styles";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitleStyle}>{props.title}</Text>
      <SearchView
        searchPrompt="Search movies"
        searchButtonPrompt="Search"
        containerStyle={styles.searchViewContainer}
        textInputStyle={styles.searchViewInput}
        searchButtonStyle={styles.searchViewButton}
        onSearchSubmit={props.onSearchSubmit}
      />
    </View>
  );
};

Header.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
