import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import akun from '../assets/images/account.png'
import Poppins from '../components/Poppins'
import Images from '../components/Images'
import Buttons from '../components/Buttons'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Poppins type='Bold' ml={20} size={18}>Akun</Poppins>
      <View style={{ justifyContent:'center' }}>
      <Images source={akun} w='90%' as='center' h='60%'/>
      <Poppins ph={40} size={16} ta='center' mt={-20}>Upss, kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah</Poppins>
      <Buttons w={100} h={50} bg='#5CB85F' br={5} mt={20}>Register</Buttons>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F7F7F7',
    height: '100%',
    paddingTop:30,
  },
})