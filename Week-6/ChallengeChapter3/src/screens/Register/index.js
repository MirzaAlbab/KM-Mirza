import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {BaseUrlApi} from '../../helpers/Api';
import axios from 'axios';

export default function Register({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postRegister = async () => {
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
  
        const res = await axios.post(`${BaseUrlApi}api/register`, body, {
          validateStatus: status => status < 501});
  
        console.log(res);
        
        if(res.status <= 201){
          navigation.navigate("Login")
        } else {
          return alert("Error")
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    
  };
  
  return (
    <View style={styles.container}>
        {/* <Image style={{marginBottom:50, width:70, height:70}} source={require('./asset/icon-app.png')} /> */}
       
          <TextInput 
            style={styles.textInput}
            placeholder='Email'
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor='#ffffff'
          />
          <TextInput 
            secureTextEntry
            style={[styles.textInput]}
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor='#ffffff'
          />
        
        <TouchableOpacity onPress={postRegister} style={styles.buttonStyle}>
          <Text style={styles.textSignup}>Register</Text>
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
    width:350
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