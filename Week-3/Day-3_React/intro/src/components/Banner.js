import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Photo = () => {
  return (
    <Image source={require('../assets/Banner.png')} style={styles.image}/>
  );
}

const styles =StyleSheet.create({ 
  image: {
    width: '100%',
    height: '40%',
    marginTop: '-20%',
    marginHorizontal:'5%',
    borderRadius:10,
  }
})

export default Photo;