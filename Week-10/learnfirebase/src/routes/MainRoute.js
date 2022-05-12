import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabs from './BottomTabs';
import Login from '../screen/Login';
import Register from '../screen/Register';
const Stack = createStackNavigator();

export default function MainRoute() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
}
