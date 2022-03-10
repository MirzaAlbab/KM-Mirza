import React from 'react'
import {Text,StyleSheet, Image} from 'react-native'

  const Images=({
    w='100%',
    h='100%',
    source,
    mt=0,
    br=0,
    mr=0,
    as='center',
    
  })=>{
  const style = StyleSheet.create({
    gambar:{
    width: w,
    height: h,
    marginTop: mt,
    borderRadius:br,
    alignSelf:as,
    marginRight:mr
    }
  })
  return (
    <Image source={source} style={style.gambar} resizeMode='contain'></Image>
  )
}
export default Images