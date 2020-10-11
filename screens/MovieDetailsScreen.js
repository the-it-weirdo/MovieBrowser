import React from 'react';
import MovieView from '../components/MovieView';

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.getParam('moviedetails').Title,
    };
  };

  render() {
    return <MovieView moviedata={this.props.navigation.getParam('moviedetails')} />;
  }
}
