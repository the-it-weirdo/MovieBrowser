import React from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  input: {
    borderWidth: 1,
    width: "70%",
    borderColor: "black",
    alignSelf: "stretch",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  button: {
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
  },
});

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
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Movie"
          value={this.state.searchText}
          onChangeText={this.onTextChange}
        />
        <Button
          style={styles.button}
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
