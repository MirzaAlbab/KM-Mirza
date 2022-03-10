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
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:'blue', tabBarStyle:{ paddingTop:10, height:70, paddingBottom:10 },tabBarInactiveTintColor:'grey', tabBarLabelStyle:{
      fontSize:15,}
    }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => ( <Feather name="home" color={color} size={25} /> ), }} />
      <Tab.Screen name="List Mobil" component={List} options={{ tabBarLabel: 'List Mobil', tabBarIcon: ({ color }) => ( <Feather name="list" color={color} size={25} /> ), }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color }) => ( <Feather name="user" color={color} size={25} /> ), }} />
    </Tab.Navigator>
  );
}