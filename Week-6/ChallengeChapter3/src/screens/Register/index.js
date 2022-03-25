import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import {BaseUrlApi} from '../../helpers/Api';
import axios from 'axios';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import logo from '../../assets/images/Reactflix.png';
import Monserrat from '../../components/Monserrat';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Register({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const postRegister = async () => {
    // Cek inputan kosong

    if(email.length < 1 || password.length < 1){
      alert('Email atau password tidak boleh kosong');
    }
    else {
      try {
        const body = {
          email: email, //eve.holt@reqres.in
          password: password, //pistol
        };
  
        const res = await axios.post(`${BaseUrlApi}api/register`, body, {
          validateStatus: status => status < 501});
  
        console.log(res);
        
        if(res.status <= 201){
          navigation.navigate("Login")
        } else {
          return alert("Registrasi gagal")
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    
  };

  const emailChange = (text) => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( text.match(regEmail)){ 
      setEmail(text);
      setEmailError('');
    } 
    else {   
      setEmailError('Email tidak valid');
    }
      
  }
  const passwordChange = (text) => {
    const regpassword = /^(?=.*[A-Za-z])[A-Za-z\d]{5,}$/;
    if( text.match(regpassword)){ 
      setPassword(text);
      setPasswordError('');
  } else {
    setPasswordError('Password minimal 5 karakter');
      
  }
  };
  
  
  
  return (

    <View style={styles.container}>
      
        <FastImage style={{marginBottom:50, width:300, height:40}} resizeMode='contain' source={logo} />
        <Monserrat color='white' alignSelf='flex-start' width={350} paddingHorizontal={30} marginBottom={20} size={16} marginTop={-30}>Join Us & Enjoy 99+ Movies in Your Smartphone</Monserrat>
          <TextInput 
            style={styles.textInput}
            placeholder='Email'  
            autoCapitalize="none"
            onChangeText={(text) => emailChange(text)}
            placeholderTextColor='#ffffff'
          />
          <Monserrat  type='Bold'color='red' fontSize={12} marginLeft={-200} marginBottom={10} >{emailError}</Monserrat>
          
          <View style={{ position:'relative' }}>
          <TextInput 
            secureTextEntry={hidePassword}
            onChangeText={(text) => passwordChange(text)}
            style={[styles.textInput]}
            placeholder='Password'
            placeholderTextColor='#ffffff'
          />
          <Monserrat  type='Bold'color='red' fontSize={12}  marginBottom={10} >{passwordError}</Monserrat>
           <TouchableOpacity style={styles.hide} onPress={() => setHidePassword(!hidePassword)}>
            { hidePassword ? 
            <Ionicons
              name="eye"
              color="#fff"
              size={25}
              />
              :
              <Ionicons
              name="eye-off"
              color="#fff"
              size={25}
              />
              }   
            </TouchableOpacity>
          </View>
        
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
    backgroundColor: '#000',
    flexDirection: 'column'
  },
  title:{

  },
  textInput:{
    height: 40,
    borderColor: '#ffffff',
    backgroundColor: '#1A1A1A',
    borderWidth: 2,
    color:'#fff',
    paddingHorizontal:20,
    marginBottom:10,
    borderRadius:10,
    width:moderateScale(300),
  },
  buttonStyle:{
    backgroundColor:'#FF0000',
    paddingLeft:10,
    paddingRight:10,
    
    width:moderateScale(300),
    borderRadius:10,
  },
  textSignup: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  hide:{
    position: 'absolute',
    right:10,
    top:6
    
  },
})