import { View, Text, TouchableOpacity, FlatList,Image, ActivityIndicator } from 'react-native'
import React from 'react'
import axios from 'axios'
import { ACCESS_TOKEN, BaseUrl, ImageUrl } from '../../helpers/Api'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Setlistmovie } from './redux/action'
import { setLoading } from '../Login/redux/action'
import Poppins from '../../components/Poppins'

export default function Home(props) {

  // const [listMovie, setListMovie] = useState([]);
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.login);
  const {listMovie} = useSelector(state => state.movie);
  const {token} = useSelector(state => state.global);

  useEffect(()=>{
    getListMovie('now_playing');
    
  },[]);

  const getListMovie = async (endpoint) => {
    try {
      dispatch(setLoading(true))
      const results = await axios.get(`${BaseUrl}movie/${endpoint}`, {
        headers : {Authorization : `Bearer ${ACCESS_TOKEN}`},
      });
      // console.log(results)
      dispatch(Setlistmovie(results.data.results));
    } catch (error) {
      console.log(error)
    }
    finally{
      dispatch(setLoading(false))
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
          borderRadius: 10,
          borderWidth: 3,
          padding: 10,
          marginHorizontal: 10,
        }}>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{height: 200, width: 100, borderRadius: 10, flex: 1}}
        />
        <View style={{marginVertical: 10, flex: 1, marginLeft:10}}>
          <Poppins  marginVertical={5} type="Bold" size={18}>
            {item.title}
          </Poppins>
          <Poppins marginVertical={5} >
            Viewers: {item.popularity}
          </Poppins>
          <Poppins marginVertical={5} >
            Released: {item.release_date}
          </Poppins>
          <Poppins marginVertical={5} >
            Rating: {item.vote_average} out of 10
          </Poppins>
        </View>
      </View>
    );
  };
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
        <Poppins>Loading..</Poppins>
      </View>
    );
  }
  

  if(token){

    return (
  
      <View style={{flex: 1}}>
        <View style={{marginTop: 10}}>
          <Poppins type='Bold' size={30} marginHorizontal={20}>
            List Movie
          </Poppins>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#B85252',
            justifyContent: 'space-evenly',
            marginTop: 10,
            paddingVertical: 10,
            
          }}>
          <TouchableOpacity onPress={()=> getListMovie('popular')}>
            <Poppins size={14} type='Bold'>Popular</Poppins>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> getListMovie('top_rated')}>
            <Poppins size={14} type='Bold'>Top Rated</Poppins>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> getListMovie('now_playing')}>
            <Poppins size={14} type='Bold'>Now Playing</Poppins>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={listMovie}
          keyExtractor={(item, index) => index}
          renderItem={CardMovie}
        />
      </View>
    )
  }else{
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
        style={{ padding:10, backgroundColor: '#B85252', borderRadius: 5, marginTop: 10 }} 
        onPress={()=> props.navigation.navigate('Login')}>
        <Poppins type='Bold'>Please Login First</Poppins>
        </TouchableOpacity>
      </View>
    )
  }
    
   
  }
  
