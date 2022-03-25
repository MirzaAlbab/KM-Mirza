import { StyleSheet, Text, View, TextInput, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import axios from 'axios';
import {BaseUrlApi} from '../../helpers/Api';
import Monserrat from '../../components/Monserrat';
import logo from '../../assets/images/Reactflix.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Loading from '../../components/Loading';


export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const postLogin = async () => {
    // Cek inputan kosong
    if(email.length < 1 || password.length < 1){
      alert('Email atau password tidak boleh kosong');
    } 
    
    else {
      setLoading(true);
      try {
        const body = {
          email: email,//eve.holt@reqres.in
          password: password, //cityslicka
        };
  
        const res = await axios.post(`${BaseUrlApi}api/login`, body, {
          validateStatus: status => status < 501});
  
        console.log(res);
        
        if(res.status <= 201){
          navigation.navigate("Home")
        } else {
          return alert("Email atau Password salah");
        }
      } catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
  }
  

  return (
    // loading ? <View style={styles.progressBar}><Loading /></View>
    // :
    <View style={styles.container}>
        <Image style={{marginBottom:50, width:300, height:70}} resizeMode='contain' source={logo} />

          <TextInput 
            style={styles.textInput}
            placeholder='Email'
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor='#ffffff'
            autoCapitalize="none"
          />
          <View style={{ position:'relative' }}>
          <TextInput 
            secureTextEntry={hidePassword}
            onChangeText={(text) => setPassword(text)}
            style={[styles.textInput]}
            placeholder='Password'
            placeholderTextColor='#ffffff'
          />
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
          
        
        <TouchableOpacity onPress={postLogin} style={styles.buttonStyle}>
          {loading ? <ActivityIndicator/> : <Text style={styles.textSignup}>Login</Text>}
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginVertical: 10}}
          onPress={() => navigation.navigate('Register')}>
          <Monserrat type='Bold' color='#fff' size={12}>Don’t have account? Register</Monserrat>
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
    flexDirection: 'column',
  },
  textInput:{
    height: 40,
    borderColor: '#ffffff',
    backgroundColor: '#1A1A1A',
    borderWidth: 2,
    color:'#fff',
    paddingHorizontal:20,
    marginVertical: 10,
    marginBottom:10,
    borderRadius:10,
    width:moderateScale(300),
  },
  buttonStyle:{
    backgroundColor:'#FF0000',
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,
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
    top:16
    
  },
  progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
  
})