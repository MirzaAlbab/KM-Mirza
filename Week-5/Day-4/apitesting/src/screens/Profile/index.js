import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  // const user = useSelector(state => state)
  // const {name, age} = useSelector(state => state.profile);
  const {name, age} = useSelector(state => state.profile);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})