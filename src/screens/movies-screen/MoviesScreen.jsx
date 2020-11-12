import React, { useState } from "react";
import { Header } from '../../containers';
import { MovieList } from '../../components';

import moviesData from '../../assets/database.json'
import { SafeAreaView, StyleSheet, View } from 'react-native';

export const MoviesScreen = () => {
  const [movies, setMovies] = useState(moviesData);

  const filterMovies = (text) => {
    const filteredMovies = moviesData.filter((movie) => movie.name.startsWith(text))
    setMovies(filteredMovies);
  }

  return (
    <SafeAreaView style={styles.movieScreen}>
      <Header onSearch={filterMovies} />
      <MovieList movies={movies} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  movieScreen: {
    flex: 1,
    width: "100%",
    backgroundColor: "#303030"
  }
})