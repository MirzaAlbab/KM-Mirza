import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import akun from '../../assets/Allura.png'

export default function Profile(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Akun</Text>
      <Image source={akun} style={ styles.gambar } resizeMode="contain" />
      <Text style={styles.keterangan}>Upss, kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah</Text>
      <TouchableOpacity style={styles.register} onPress={()=> props.navigation.navigate('Register')}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    height: '100%',
  },
  title:{
    fontSize:20,
    color:'#000',
    margin: 20,
    fontWeight:'bold',
  },
  gambar: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth:5
  },
  register:{
    width:100,
    height:50,
    backgroundColor:'#5CB85F',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderRadius:5,
    marginTop:20
  },
  keterangan:{
    justifyContent:'center',
    textAlign:'center',
    paddingHorizontal:35,
    color:'black',
    fontSize:16,
    marginTop:-125
  },
  text:{
    fontWeight:'bold',
    color:'#fff',
    fontSize:18
  }
})