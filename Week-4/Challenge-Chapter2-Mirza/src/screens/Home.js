import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import Poppins from '../components/Poppins'
import Images from '../components/Images'
import MainMenu from '../components/MainMenu'
import ListMobil from '../components/ListMobil'
import ava from '../assets/images/Ellipse.png'
import banner from '../assets/images/banner.png'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={{flexDirection:'row'}}>
        <View style={{ flexDirection:'column', width:'50%' }}>
          <Poppins ml={20} size={14}>Hi, Mirza</Poppins>
          <Poppins ml={20} size={18} type='Bold'>Your Location</Poppins>
        </View>
        <View style={{ flexDirection:'row',justifyContent:'flex-end', width:'50%' }}>
          <Images source={ava} w={40} mr={30}/>
        </View>
      </View>
      <Images source={banner} w='90%' h='40%' mt='-7%'/>
      <MainMenu />
      <Poppins type='Bold' size={16} ml={20} mt={20}>Daftar Mobil Pilihan</Poppins>
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