import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screen/Home';
import QRCode from '../screen/QRCode';
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      inactiveColor="grey"
      screenOptions={{headerShown: false}}
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="QR" component={QRCode} />
    </Tab.Navigator>
  );
}
