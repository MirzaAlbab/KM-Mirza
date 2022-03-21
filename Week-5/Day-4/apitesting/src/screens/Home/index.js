import { View, Text, TouchableOpacity, FlatList,Image } from 'react-native'
import React from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BaseUrl, ImageUrl } from '../../helpers/Api'
import { useState, useEffect } from 'react'

export default function Home() {

  const [listMovie, setListMovie] = useState([]);

  useEffect(()=>{
    getListMovie('now_playing');
  },[]);

  const getListMovie = async (endpoint) => {
    try {
      const results = await axios.get(`${BaseUrl}movie/${endpoint}`, {
        headers : {Authorization : `Bearer ${ACCESS_TOKEN}`},
      });
      console.log(results)
      setListMovie(results.data.results);
    } catch (error) {
      console.log(error)
    }
  };


  const CardMovie = ({item}) => {
    return (
      <View
        style={{
          marginTop: 18,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#470D21',
          borderRadius: 5,
          borderWidth: 3,
          padding: 10,
          marginHorizontal: 10,
        }}>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{height: 250, width: 150, borderRadius: 5, flex: 1}}
        />
        <View style={{marginStart: 10, flex: 1}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {item.title}
          </Text>
          <Text style={{fontSize: 10, marginTop: 10, textAlign: 'auto'}}>
            Viewers: {item.popularity}
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 10,
              textAlign: 'auto',
              fontWeight: '500',
            }}>
            {item.release_date}
          </Text>
          <Text style={{fontSize: 10, marginTop: 10, textAlign: 'auto'}}>
            {item.overview}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 35, color: '#4C0027', alignSelf: 'center'}}>
          List Movie
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#852747',
          justifyContent: 'space-evenly',
          marginTop: 10,
          paddingVertical: 10,
          
        }}>
        <TouchableOpacity onPress={()=> getListMovie('popular')}>
          <Text style={{ color: '#fff' }}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> getListMovie('top_rated')}>
          <Text style={{ color: '#fff' }}>Top Rated</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> getListMovie('now_playing')}>
          <Text style={{ color: '#fff' }}>Now Playing</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          paddingTop: 10,
          color: '#FFFF',
          marginBottom: 10,
        }}>
        
      </Text>
      <FlatList
        data={listMovie}
        keyExtractor={(item, index) => index}
        renderItem={CardMovie}
      />
    </View>
  )
}