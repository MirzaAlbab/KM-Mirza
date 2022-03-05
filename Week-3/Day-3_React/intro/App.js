import React from 'react';
import { Text, View, Image,StyleSheet } from 'react-native'; 
import Photo from './src/components/Banner';


const App = () => {
  return (
    <View >
      <View style={styles.header}>
        <Text>Hi, Teen</Text>
        <Text>Your Location</Text>
      </View>
      <Photo />
     
    </View>
  );
}




const styles = StyleSheet.create({
  header:{
    width: '100%',
    height: 150,
    backgroundColor: '#99CEEB',
  }
});

export default App;