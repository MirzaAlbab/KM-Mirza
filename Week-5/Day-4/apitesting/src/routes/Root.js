import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainRoute from './MainRoute';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/globalaction';
import Entypo from 'react-native-vector-icons/Entypo';

const Root=()=> {
  const dispatch = useDispatch();
  const {tema} = useSelector(state => state.global);
  const MyTheme = {
   
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: tema === 'light' ? '#000000' : '#EADEDE',
      card: 'rgb(255, 255, 255)',
      text: 'white',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  const changeTheme = () => {
    if (tema === 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  }
  return (
  <>

  <NavigationContainer theme={MyTheme}>
    <MainRoute />
  </NavigationContainer>
  
  <TouchableOpacity
    style={{ position:'absolute', width:40, height:40, top:10, right:10, 
     padding:5, backgroundColor: tema === 'light' ? '#f4f4fe' : '#424462', borderRadius:20, justifyContent:'center', alignItems:'center'}}
    onPress={changeTheme}>
    {tema === 'dark' ? <Entypo name="light-up" size={25} color="#f4f4fe" />: <Entypo name="light-up" size={25} color="#424462" />}
    
    
  </TouchableOpacity>
  

  
  
  </>
  )
}
export default Root;
