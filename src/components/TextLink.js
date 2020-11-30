import React from "react";
import { Text, Linking } from "react-native";
import PropTypes from "prop-types";

const TextLink = (props) => {
  return (
    <Text
      accessibilityRole="link"
      onPress={() => {
        Linking.openURL(props.url);
      }}
      style={[{ color: "blue" }, props.style]}
    >
      {props.text}
    </Text>
  );
};

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object || PropTypes.array,
  url: PropTypes.string.isRequired,
};

export default TextLink;
