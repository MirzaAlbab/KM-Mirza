import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Login(props) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Main')}>
        <Text>Navigate to Home</Text>
      </TouchableOpacity>
    </View>
  )
}