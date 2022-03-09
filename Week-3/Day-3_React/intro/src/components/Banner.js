import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Photo = () => {
  return (
    <Image source={require('../assets/Banner.png')} resizeMode='contain' style={styles.image}/>
  );
}

const styles =StyleSheet.create({ 
  image: {
    width: '80%',
    height: '40%',
    marginTop: '-10%',
    borderRadius:10,
    alignSelf:'center'
  }
})

export default Photo;