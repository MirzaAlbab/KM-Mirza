import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainRoute from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  )
}

