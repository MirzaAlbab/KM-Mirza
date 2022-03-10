import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import menu1 from '../assets/images/fi_truck.png'
import menu2 from '../assets/images/fi_box.png'
import menu3 from '../assets/images/fi_key.png'
import menu4 from '../assets/images/fi_camera.png'
import Images from './Images'
import Poppins from './Poppins'

export default function MainMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.box}>
          <Images source={menu1} w={60} h={40}/>
        </View>
        <View style={styles.box}>
          <Images source={menu2} w={60} h={40}/>
        </View>
        <View style={styles.box}>
          <Images source={menu3} w={60} h={40}/>
        </View>
        <View style={styles.box}>
          <Images source={menu4} w={60} h={40}/>
        </View>
      </View>

      <View style={styles.container3}>
        <Poppins ml={5} size={14}>Sewa Mobil</Poppins>
        <Poppins ml={5} size={14}>Oleh-Oleh</Poppins>
        <Poppins mr={10} size={14}>Penginapan</Poppins>
        <Poppins mr={25} size={14}>Wisata</Poppins>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container2:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:-20,
    backgroundColor:'#F7F7F7'
  },
  box:{
    backgroundColor: '#DEF1DF',
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
  },
  container3:{
    marginTop:10,
    justifyContent:'space-evenly',
    flexDirection:'row',
    backgroundColor:'#F7F7F7'
  }
})