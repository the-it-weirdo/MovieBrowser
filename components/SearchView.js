import React from "react";
import { TextInput, Keyboard, View } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class SearchView extends React.Component {
  state = {
    searchText: "",
  };

  onTextChange = (newText) => {
    this.setState({ searchText: newText });
  };

  onSearchSubmit = () => {
    Keyboard.dismiss();
    this.props.onSearchSubmit(this.state.searchText);
  };

  render() {
    return (
      <View style={styles.searchViewContainer}>
        <TextInput
          style={styles.searchViewInput}
          placeholder="Search Movie"
          value={this.state.searchText}
          onChangeText={this.onTextChange}
        />
        <MaterialIcons.Button
          name="search"
          onPress={this.onSearchSubmit}
          backgroundColor="#00aaff"
          borderRadius={50}
        >
          Search
        </MaterialIcons.Button>
      </View>
    );
  }
}

SearchView.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};
