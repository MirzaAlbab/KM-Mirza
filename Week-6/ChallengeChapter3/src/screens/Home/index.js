import { View, Text, TouchableOpacity, FlatList,Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import axios from 'axios'
import { AllMovie } from '../../helpers/Api'
import { useState, useEffect } from 'react'
import { moderateScale } from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Monserrat from '../../components/Monserrat'
import FastImage from 'react-native-fast-image'
import Loading from '../../components/Loading'

export default function Home({ navigation }) {

  const [listMovie, setListMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getListMovie();
  },[]);

  const getListMovie = async () => {
    try {
      setLoading(true);
      const results = await axios.get(`${AllMovie}`);
      console.log(results)
      setListMovie(results.data.results);
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  };


  const CardMovie = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginHorizontal: 10,
          marginVertical:5,
          backgroundColor: '#1a1a1a',
          borderRadius: 10,
        }}>
        <FastImage
          source={{uri: `${item.poster_path}`}}
          style={{height: moderateScale(150), width:moderateScale(150), borderRadius: 5, flex: 1}}
        />
        <View style={{marginStart: 15, flex: 1}}>
          <Monserrat type='Bold' size={16} color='white'>{item.title}</Monserrat>
          
          <Monserrat
            color='white' size={12} marginTop={10}>
            Released : {item.release_date}
          </Monserrat>
          <Monserrat
            color='white' size={12} marginTop={10}>
            <FontAwesome name='star' color='yellow' size={15}/> {item.vote_average}
          </Monserrat>
          
          <TouchableOpacity onPress={() => navigation.navigate('DetailMovie',{id: `${item.id}`})} style={styles.buttonStyle}>
          <Text style={styles.textShow}>Show More</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  const PosterMovie = ({item}) => {
    return (
      <View
        style={{
          marginTop: 18,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginVertical: 15,
          marginLeft:5,
          marginHorizontal: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailMovie',{id: `${item.id}`})} >
          <Image style={{ width:moderateScale(100), height:moderateScale(100), borderRadius: 10 }} source={{ uri: `${item.poster_path}` }}/>
        </TouchableOpacity>
      </View>
    );
  };
  

  return (
    loading ? <View style={styles.progressBar}><Loading /></View>
    :
    <SafeAreaView style={{flex: 1, backgroundColor:'black', paddingTop:10}}>
      <Monserrat type='Bold' color='white' fontSize={18} paddingHorizontal={15} marginVertical={10}>Recommended Movies</Monserrat>
      <FlatList
        data={listMovie}
        keyExtractor={(item, index) => index}
        renderItem={PosterMovie}
        horizontal={true}
      />
      <Monserrat type='Bold' color='white' fontSize={18} paddingHorizontal={15} marginVertical={10}>Latest Upload</Monserrat>
      <FlatList
        data={listMovie}
        keyExtractor={(item, index) => index}
        renderItem={CardMovie}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textShow: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    margin: moderateScale(10),
    color:'#fff',
    fontFamily: 'Monserrat-Bold',
  },
  buttonStyle:{
    backgroundColor:'#FF1A28',
    paddingLeft:moderateScale(10),
    paddingRight:moderateScale(10),
    marginTop:moderateScale(10),
    width:moderateScale(150),
    borderRadius:10
  },
  title:{
    fontSize: moderateScale(20), 
    fontWeight: 'bold', 
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(15),
    color:'white'
  },
  titlemov:{
    fontSize: moderateScale(20), 
    fontWeight: 'bold', 
    color:'black'
  },
  progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
})