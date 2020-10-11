import React from 'react';
import {Button, View, StyleSheet, Alert} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignContent: 'space-between',
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component {
  handleButtonPress = () => {
    console.log(this.props);
    this.props.navigation.push('MovieDetails', {
      moviedetails: this.props.screenProps.movie,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Click Me" onPress={this.handleButtonPress} />
      </View>
    );
  }
}

export default HomeScreen;
