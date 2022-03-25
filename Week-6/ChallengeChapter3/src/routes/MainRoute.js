import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import MovieScreen from '../screens/MovieScreen';


const Stack = createStackNavigator();

export default function MainRoute() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DetailMovie" component={MovieScreen} />
    </Stack.Navigator>
  );
}