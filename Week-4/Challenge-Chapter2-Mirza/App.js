import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import BottomTab from './src/routes/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';


export default function App() {
  useEffect(() => {
    SplashScreen.hide();
   }, [])
  return (
    <NavigationContainer>
      <BottomTab />
  </NavigationContainer>
  )
}