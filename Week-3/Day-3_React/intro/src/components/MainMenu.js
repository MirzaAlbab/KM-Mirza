import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import menu1 from '../assets/fi_truck.png'
import menu2 from '../assets/fi_box.png'
import menu3 from '../assets/fi_key.png'
import menu4 from '../assets/fi_camera.png'

export default function MainMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.container2}>
          <Image source={menu1} style={styles.gambar} resizeMode='contain'/>
        </View>
        <View style={styles.container2}>
          <Image source={menu2} style={styles.gambar} resizeMode='contain'/>
        </View>
        <View style={styles.container2}>
          <Image source={menu3} style={styles.gambar} resizeMode='contain'/>
        </View>
        <View style={styles.container2}>
          <Image source={menu4} style={styles.gambar} resizeMode='contain'/>
        </View>

      </View>
      <View style={styles.container3}>
      <Text style={styles.text}>Sewa Mobil</Text>
      <Text style={styles.text}>Oleh-Oleh</Text>
      <Text style={styles.text}>Penginapan</Text>
      <Text style={styles.text}>Wisata</Text>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginTop:-20,
    justifyContent:'space-evenly',
    flexDirection:'column',
  },
  box:{
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  container2:{
    backgroundColor: '#DEF1DF',
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
  },
  gambar: {
    width:60,
    height:40,
    padding:20,
  },
  container3:{
    justifyContent:'space-evenly',
    flexDirection:'row',
  }
})