import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import axios from 'axios';
import {BaseUrlApi} from '../../helpers/Api';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    // Cek inputan kosong
    if(email.length < 1 || password.length < 1){
      alert('Email atau password tidak boleh kosong');
    } 
    
    else {
      try {
        const body = {
          email: email,
          password: password,
        };
  
        const res = await axios.post(`${BaseUrlApi}api/login`, body, {
          validateStatus: status => status < 501});
  
        console.log(res);
        
        if(res.status <= 201){
          navigation.navigate("Home")
        } else {
          return alert("Error")
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.container}>
        {/* <Image style={{marginBottom:50, width:70, height:70}} source={require('./asset/icon-app.png')} /> */}
       
          <TextInput 
            style={styles.textInput}
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor='#ffffff'
            autoCapitalize="none"
          />
          <TextInput 
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            style={[styles.textInput]}
            placeholder='Password'
            placeholderTextColor='#ffffff'
          />
        
        <TouchableOpacity onPress={postLogin} style={styles.buttonStyle}>
          <Text style={styles.textSignup}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginVertical: 10}}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.instructions}>Don’t have account? Register</Text>
        </TouchableOpacity>
        
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ABC9C',
    flexDirection: 'column'
  },
  textInput:{
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 1,
    color:'#ffffff',
    paddingLeft:10,
    paddingRight:10,
    marginBottom:10,
    width:moderateScale(350),
  },
  buttonStyle:{
    backgroundColor:'#ffffff',
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,
    width:350
  },
  textSignup: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color:'#1ABC9C'
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
    marginTop:10
  },
})