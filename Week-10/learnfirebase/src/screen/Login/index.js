import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import SocialAuth from '../../components/SocialAuth';
import auth from '@react-native-firebase/auth';
export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleSignInClick = async () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill in all fields');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert('Login successfully');
          navigation.navigate('Main');
        })
        .catch(() => {
          Alert.alert('Invalid credentials');
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: 'QuicksandBold',
            color: '#fff',
          }}>
          Log in
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.email}
          defaultValue={email}
          onChangeText={handleEmailChange}
          textContentType="emailAddress"
          placeholder="Email Address"
          placeholderTextColor="grey"
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.password}
            defaultValue={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter Password"
            placeholderTextColor="grey"
            returnKeyType="go"
            secureTextEntry
            textContentType="password"
            keyboardType="default"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignInClick}>
          <Text style={{fontFamily: 'QuicksandBold', fontSize: 20}}>
            Log In
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            paddingTop: 40,
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'QuicksandBold',
            fontSize: 16,
            color: 'white',
          }}>
          or Log in with
        </Text>
        <SocialAuth />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',

            height: 30,
          }}
          onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'QuicksandBold',
              fontSize: 16,
              color: 'white',
            }}>
            Do not have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0C1C',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    marginBottom: 40,
    top: -20,
  },
  form: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: -40,
  },
  email: {
    width: '100%',
    height: 60,
    backgroundColor: '#0ff1',
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
    fontFamily: 'QuicksandBold',
    color: '#fff',
  },
  password: {
    width: '85%',
    height: 60,
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
    fontFamily: 'QuicksandBold',
    color: '#fff',
  },

  passwordContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#0ff1',
    borderRadius: 5,
    marginBottom: 35,
  },
  eyeContainer: {
    position: 'absolute',
    right: 10,
    top: 20,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1da',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
    padding: 10,
  },

  forgot: {
    fontFamily: 'QuicksandBold',
    color: '#fff',
    fontSize: 18,
  },

  forgotContainer: {
    top: -20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});
