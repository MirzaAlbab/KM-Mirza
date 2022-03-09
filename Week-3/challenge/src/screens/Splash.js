import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Splash() {
  return (
    <View>
      <Image source={require('../assets/splash.png')} style={{width:480, height:840}}/>
    </View>
  )
}