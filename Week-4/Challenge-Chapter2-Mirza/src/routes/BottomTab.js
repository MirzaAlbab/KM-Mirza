import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/Home';
import List from '../screens/List';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon:() => <Feather name="home" color='blue' size={20}/> }} />
      <Tab.Screen name="List" component={List} options={{ tabBarIcon:() => <Feather name="list" color='blue' size={20} /> }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon:() => <MaterialCommunityIcons name="account-outline" color='blue' size={20}/> }} />
    </Tab.Navigator>
  );
}