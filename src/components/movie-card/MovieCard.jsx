import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native';

export const MovieCard = ({ name, imageUrl, available }) => {
  return (
    <View style={ styles.movie }>
      <Image 
      style={[ styles.img, available ? styles.blue : styles.red ]}
      source={{
        uri: imageUrl
      }}/>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  movie: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20
  },
  blue: {
    borderColor: "#3d5afe",
    borderWidth: 2
  },
  red: {
    borderColor: "red",
    borderWidth: 2
  },
  img: {
    width: 200,
    height: 300,
  },
  name: {
    color: "#FFFFFF", 
    fontSize: 18 
  }
  
  //   span {
  //     padding-top: 10px;
  //     text-align: center;
  //     font-size: 14px;
  //     max-width: 200px;
  //     font-family: 'Roboto Condensed', sans-serif;
  //     color: #ffffff;
  //   }
  // }
})