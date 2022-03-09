import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Banner from '../../components/Banner'
import MainMenu from '../../components/MainMenu'
import Poppins from '../../components/Poppins'
export default function Home(props) {
  return (
    <View style={styles.container}>
     
      <View style={styles.box}></View>
      <Text style={styles.name}>Hi, Nama</Text>
      <Text style={styles.title}>Your Location</Text>
      <Banner/>
      <MainMenu />
      <Poppins type='Bold'>halo</Poppins>
      <Poppins children='Sewa Mobil' />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    height: '100%',
  },
  box:{
    width: '100%',
    backgroundColor: '#D3D9FD',
    height:200,
    position: 'absolute',
  },
  name:{
    fontSize:16,
    color:'#000',
    marginLeft:20,
    marginTop:30
  },
  title:{
    fontSize:20,
    color:'#000',
    marginLeft: 20,
    fontWeight:'bold',
  }
})