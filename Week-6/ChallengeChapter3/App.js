import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoute from './src/routes/MainRoute';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
   }, [])
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}