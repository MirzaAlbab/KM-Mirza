import {Text, View, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import {BaseUrlApi} from '../../helpers/Api';
import {useSelector, useDispatch} from 'react-redux';
import {setUsername, setPassword, setLoading} from './redux/action';

export default function Login({navigation}) {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);

  const {username, password, loading} = useSelector(state => state.login);
  const dispatch = useDispatch();


  const postLogin = async () => {
    try {
      dispatch(setLoading(true))
      
      const body = {
        username: username,
        password: password,
      };

      const res = await axios.post(`${BaseUrlApi}/auth/login`, body, {
        validateStatus: status => status < 501});
      console.log(res.status);
      if(res.status <= 201){
        navigation.navigate("Main")
      } else {
        return alert("Username atau password Salah")
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      dispatch(setLoading(false))
      console.log(username, password, loading)
    }
  };

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator/>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#0000',
      }}>
      <ImageBackground
        source={require('../../assets/bioskop.jpg')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
        <View style={{marginTop: -150}}>
          <Text
            style={{
              margin: 20,
              textAlign: 'center',
              fontSize: 50,
              fontWeight: 'bold',
              color: '#5D8BF4',
            }}>
            Sign In
          </Text>
          <View
            style={{
              margin: 10,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Input
              style={{height: 50, color: 'white'}}
              placeholder="username"
              placeholderTextColor={'white'}
              onChangeText={text => dispatch(setUsername(text))}
              // onChangeText={text => setUsername(text)}
            />
            <Input
              style={{height: 50, color: 'white'}}
              placeholder="password"
              placeholderTextColor={'white'}
              onChangeText={text => dispatch(setPassword(text))}
              // onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  marginTop: 5,
                  marginBottom: 25,
                }}>
                Forget Password?
              </Text>
            </TouchableOpacity>

            <Button onPress={postLogin} title={'Sign in'} />
            <TouchableOpacity
              style={{marginVertical: 10}}
              onPress={() => navigation.navigate('Register')}>
              <Text style={{color: 'white'}}>Don't have an account? Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}