import { View, Text } from 'react-native'
import React from 'react'

export default function Renderscreen(props) {
  return (
    <View>
      <Text>Pada suatu hari hiduplah seorang {props.kandidat} dia hidup bersama {' '} {props.child} {props.firstName}</Text>
    </View>
  )
}