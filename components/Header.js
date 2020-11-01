import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/styles";

import SearchView from "../components/SearchView";

const Header = (props) => {
  //   const headerHeight = useHeaderHeight();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitleStyle}>{props.title}</Text>
      <SearchView onSearchSubmit={props.onSearchSubmit} />
    </View>
  );
};

Header.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
