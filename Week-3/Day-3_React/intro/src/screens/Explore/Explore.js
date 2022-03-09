import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ListMobil from '../../components/ListMobil'


export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Mobil</Text>
      <ListMobil />
      <ListMobil />
      <ListMobil />
      <ListMobil />
      <ListMobil />
      {/* <TouchableOpacity onPress={()=> props.navigation.navigate('Profile')}>
        <Text>Navigate to Profile</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity onPress={()=> props.navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    backgroundColor:'white',
  },
  title:{
    fontSize:20,
    color:'#000',
    margin: 20,
    fontWeight:'bold',
  }
})

