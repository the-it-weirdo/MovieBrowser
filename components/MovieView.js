import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 10,
  },
  item: {
    width: '50%',
  },
  poster: {
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    padding: 5,
  },
  detailItem: {
    fontSize: 14,
    padding: 10,
  },
  directorAndWriter: {
    fontStyle: 'italic',
    justifyContent: 'center',
  },
});

const MovieView = (props) => {
  let movie = props.moviedata;
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.poster}
          source={{
            uri: movie.Poster,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.detailItem}>{movie.Released}</Text>
        <Text style={styles.detailItem}>{movie.Rated}</Text>
        <Text style={styles.detailItem}>{movie.Runtime}</Text>
        <Text style={styles.detailItem}>{movie.Genre}</Text>
        <Text style={styles.detailItem}>{movie.Year}</Text>
      </View>
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={{...styles.directorAndWriter, ...styles.detailItem}}>
        Directed by: {movie.Director}
      </Text>
      <Text style={{...styles.directorAndWriter, ...styles.detailItem}}>
        Written by: {movie.Writer}
      </Text>
      <Text>Starring: {movie.Actors}</Text>
      <Text>{movie.Plot}</Text>
      <Text>Ratings: {movie.imdbRating}</Text>
      {/*movie.Ratings.forEach((elem) => {
        return (
          <Text>
            {elem.Source}: {elem.Value}
          </Text>
        );
      })*/}
    </View>
  );
};

/*
  Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
  Plot:
    "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.",
  Language: 'English',
  Country: 'USA',
  Awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
  Poster:
    'https://images-na.ssl-images-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  Ratings: [
    {Source: 'Internet Movie Database', Value: '8.6/10'},
    {Source: 'Rotten Tomatoes', Value: '93%'},
    {Source: 'Metacritic', Value: '90/100'},
  ],
  Metascore: '90',
  imdbRating: '8.6',
  imdbVotes: '1,035,722',
  imdbID: 'tt0076759',
  Type: 'movie',
  DVD: '21 Sep 2004',
  BoxOffice: 'N/A',
  Production: '20th Century Fox',
*/
export default MovieView;
