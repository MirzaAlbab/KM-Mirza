import React, {useEffect} from 'react';
import MainRoute from './src/routes/MainRoute';
import SplashScreen from 'react-native-splash-screen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NavigationContainer} from '@react-navigation/native';
GoogleSignin.configure({
  webClientId:
    '355515431260-roilocfm29jktv4ic6jh5nur3n0fjvnt.apps.googleusercontent.com',
});

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}
