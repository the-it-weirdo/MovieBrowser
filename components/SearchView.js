import React from "react";
import { TextInput, Button, View } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/styles";

export default class SearchView extends React.Component {
  state = {
    searchText: "",
  };

  onTextChange = (newText) => {
    this.setState({ searchText: newText });
  };

  onSearchSubmit = () => {
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
        <Button
          style={styles.searchViewButton}
          title="Search"
          onPress={this.onSearchSubmit}
        />
      </View>
    );
  }
}

SearchView.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};
