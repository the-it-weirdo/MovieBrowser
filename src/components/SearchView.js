import React from "react";
import { TextInput, Keyboard, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const defaultStyles = StyleSheet.create({
  searchViewContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  searchViewInput: {
    borderWidth: 1,
    width: "70%",
    borderColor: "black",
    alignSelf: "stretch",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
  },
  searchViewButton: {
    borderRadius: 25,
    backgroundColor: "#00f",
  },
});

export default class SearchView extends React.Component {
  state = {
    searchText: "",
  };

  static defaultProps = {
    searchPrompt: "Search",
    searchButtonPrompt: "",
    containerStyle: defaultStyles.searchViewContainer,
    textInputStyle: defaultStyles.searchViewInput,
    searchButtonStyle: defaultStyles.searchViewButton,
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
      <View
        style={[
          this.props.containerStyle,
          {
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-evenly",
          },
        ]}
      >
        <TextInput
          style={this.props.textInputStyle}
          placeholder={this.props.searchPrompt}
          value={this.state.searchText}
          onChangeText={this.onTextChange}
        />
        <MaterialIcons.Button
          name="search"
          style={() => {
            let {
              borderRadius,
              backgroundColor,
              ...rest
            } = this.props.searchButtonStyle;
            return rest;
          }}
          onPress={this.onSearchSubmit}
          backgroundColor={this.props.searchButtonStyle.backgroundColor}
          borderRadius={this.props.searchButtonStyle.borderRadius}
        >
          {this.props.searchButtonPrompt === ""
            ? this.props.searchPrompt
            : this.props.searchButtonPrompt}
        </MaterialIcons.Button>
      </View>
    );
  }
}

SearchView.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  searchPrompt: PropTypes.string,
  searchButtonPrompt: PropTypes.string,
  searchButtonStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  textInputStyle: PropTypes.object,
};
