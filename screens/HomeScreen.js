import React from "react";
import { Button, View, StyleSheet } from "react-native";
import RowItem from "../components/RowItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:5,
    alignContent: "space-between",
    backgroundColor: "#fff",
  },
});

class HomeScreen extends React.Component {
  handleButtonPress = (movie) => {
    const navigation = this.props.navigation;
    navigation.navigate("MovieDetails", {
      title: movie.Title,
      movie,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {//<RowItem
        //   movie={this.props.moviedetails.movie}
        //   onMovieItemPress={this.handleButtonPress}
        // />

        // <RowItem
        //   movie={{...this.props.moviedetails.movie, Title: "Some Random Title"}}
        //   onMovieItemPress={this.handleButtonPress}
        // />
    }
        {
          <Button title="Click Me" onPress={this.handleButtonPress} />
        }
      </View>
    );
  }
}

export default HomeScreen;
