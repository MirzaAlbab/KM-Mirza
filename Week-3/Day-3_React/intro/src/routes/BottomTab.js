import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'
import Explore from '../screens/Explore/Explore'

const Tab = createBottomTabNavigator()
export default function BottomTab() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Tab.Screen name='Home' component={Home} options={{ tabBarIcon:() => <Feather name="home" color='blue' size={20} /> }} />
      <Tab.Screen name='Explore' component={Explore} options={{ tabBarIcon:() => <Feather name="list" color='blue' size={20} /> }} />
      <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon:() => <MaterialCommunityIcons name="account-outline" color='blue' size={20} /> }}/>
     
    </Tab.Navigator>
  )
}