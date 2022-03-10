import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import Poppins from '../components/Poppins'
import Images from '../components/Images'
import MainMenu from '../components/MainMenu'
import ListMobil from '../components/ListMobil'
import ava from '../assets/images/Ellipse.png'
import banner from '../assets/images/banner.png'

export default function List() {
  return (
    <View style={styles.container}>
      <Poppins type='Bold' size={18} ml={20}>Daftar Mobil</Poppins>
    <ListMobil />
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F7F7F7',
    height: '100%',
    paddingTop:30
  },
  box:{
    width: '100%',
    backgroundColor: '#D3D9FD',
    height:200,
    position: 'absolute',
    flexDirection: 'row',
  },

})