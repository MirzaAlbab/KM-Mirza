import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import BottomTab from '../routes/BottomTab'

const Stack = createStackNavigator();

export default function MainRoute() {
  return (
   <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown:false }}>
     <Stack.Screen name="Main" component={BottomTab} />
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="Register" component={Register} />
   </Stack.Navigator>
  )
}