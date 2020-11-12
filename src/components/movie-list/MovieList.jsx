import React from 'react'
import { MovieCard } from '..';
import { FlatList, StyleSheet, View } from 'react-native';

export const MovieList = ({ movies }) => {

  const renderMovies = ({ item: movie }) => (
    <MovieCard 
      key={movie.name} 
      name={movie.name} 
      imageUrl={movie.imageUrl} 
      available={movie.available} 
      />
  )

  return (
    <FlatList
      style={styles}
      data={movies}
      renderItem={renderMovies}
    />
  )
}

const styles = StyleSheet.create({
  movieList: {
    height: "100%",
  }
})