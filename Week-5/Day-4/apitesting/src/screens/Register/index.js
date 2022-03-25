import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import {BaseUrlApi} from '../../helpers/Api';


export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [phone, setPhone] = useState('');

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const postRegister = async () => {
    // Cek inputan kosong
    if(email.length < 1 ){
      alert('Email tidak boleh kosong');
    } 
    else if(username.length < 1){
      alert('Username tidak boleh kosong');
    }
    else if(password.length < 1 ){
      alert('Password tidak boleh kosong');
    } 
    else if(firstname.length < 1){
      alert('Firstname tidak boleh kosong');
    }
    else if(lastname.length < 1 ){
      alert('Lastname tidak boleh kosong');
    } 
    else if(city.length < 1 || street.length < 1 || number.length < 1 || zipcode.length < 1 || lat.length < 1 || long.length < 1){
      alert('Address tidak boleh kosong');
    }
    else if(phone.length < 1 ){
      alert('Number Phone tidak boleh kosong');
    } 
    else {
      // jika tidak ada yang kosong maka lanjut cek regex
      if(!email.match(regexEmail)){
        alert('Email tidak valid')
      }
      else if (!password.match(regexPassword)){
        alert('Password tidak valid')
      } 
      else{
        try {
          const body = {
            email: email,
            username: username,
            password: password,
            name:{
                firstname: firstname,
                lastname: lastname
            },
            address:{
                city: city,
                street: street,
                number: number,
                zipcode: zipcode,
                geolocation:{
                    lat: lat,
                    long: long
                }
            },
            phone: phone
          };
    
          const res = await axios.post(`${BaseUrlApi}/users`, body, {
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
    }
    
    
  };

  return (
    <ScrollView style={styles.containner}>
      <Text style={styles.topic}>Registration</Text>
      <Input placeholder="Email" 
        style={{ color:'white' }}
        placeholderTextColor={'white'} 
        onChangeText={text => setEmail(text)} />
      <Input placeholder="Username"
        style={{ color:'white' }}
        placeholderTextColor={'white'}
        onChangeText={text => setUsername(text)} />
      <Input
        placeholder="Password"
        style={{ color:'white' }}
        placeholderTextColor={'white'}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <Input
        placeholder="First Name"
        style={{ color:'white' }}
        placeholderTextColor={'white'}
        onChangeText={text => setFirstname(text)}
      />
      <Input placeholder="Last Name" 
        style={{ color:'white' }}
        placeholderTextColor={'white'} 
        onChangeText={text => setLastname(text)} />
      <Input placeholder="City" 
        style={{ color:'white' }}
        placeholderTextColor={'white'} 
        onChangeText={text => setCity(text)} />
      <Input placeholder="Street" 
        style={{ color:'white' }}
        placeholderTextColor={'white'} 
        onChangeText={text => setStreet(text)} />
      <Input placeholder="Number Address"
        style={{ color:'white' }} 
        keyboardType="phone-pad" 
        placeholderTextColor={'white'}
        onChangeText={text => setNumber(text)} />
      <Input placeholder="Zip Code" 
        style={{ color:'white' }}
        keyboardType="phone-pad"
        placeholderTextColor={'white'}
        onChangeText={text => setZipcode(text)} />
      <Input placeholder="Latitude" 
        style={{ color:'white' }}
        keyboardType="phone-pad" 
        placeholderTextColor={'white'}
        onChangeText={text => setLat(text)} />
      <Input placeholder="Longtitude" 
        style={{ color:'white' }}
        keyboardType="phone-pad" 
        placeholderTextColor={'white'}
        onChangeText={text => setLong(text)} />
      <Input
        placeholder="Number Phone"
        style={{ color:'white' }}
        keyboardType="phone-pad"
        placeholderTextColor={'white'}
        onChangeText={text => setPhone(text)}
      />
      <View
        style={{
          width: '100%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 50,
        }}>
        <Button style={{color:'black'}} onPress={postRegister} title={'Sign Up'} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containner: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#36485f',
    paddingLeft: 20,
    paddingRight: 20,
  },
  topic: {
    fontSize: 24,
    color: '#FFF',
    paddingTop: 20,
    marginBottom: 30,
    borderBottomColor: '#EEF2FF',
    borderBottomWidth: 1,
  },
  input:{

  }
});