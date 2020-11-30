import React from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";

const GraphicalUIResponse = (props) => {
  return (
    <View style={props.containerStyle}>
      <Image style={props.imageStyle} source={props.imageSource} />
      <Text style={props.textStyle}>{props.text}</Text>
    </View>
  );
};

GraphicalUIResponse.defaultProps = {
  containerStyle: {
    padding: 20,
  },
  imageStyle: {
    alignSelf: "center",
    marginBottom: 20,
    height: 100,
    width: 100,
  },
  textStyle: {
    fontFamily: "monospace",
    textAlign: "center",
  },
};

GraphicalUIResponse.propTypes = {
  imageSource: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default GraphicalUIResponse;
