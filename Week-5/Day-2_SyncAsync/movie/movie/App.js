import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { baseUrl, access_token, imageUrl } from './src/helpers/ApiAccessToken'

export default function App({type}) {
  const [movies, setMovies] = useState([])
  const [categories, setCategories] = useState('now_playing')
  
  useEffect(() => {
    getListMovieLatest()
  },[]);
  const getListMovieLatest = async () => {
    try {
      setMovies('')
      const result = await axios.get(`${baseUrl}movie/${categories}`, {headers :{Authorization: `Bearer ${access_token}`}})
      setMovies(result.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(categories)
  

  const cardView = ({item}) => {
    return (
      <TouchableOpacity style={{backgroundColor: '#fff', padding: 10, margin: 10}}>
        <Image source={{uri: `${imageUrl}${item.poster_path}`}} style={{height: 150}}/>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View >
      <Text style={{ alignSelf:'center', fontSize:25, marginBottom:20 }}>List Movie</Text>
      <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
      <TouchableOpacity style={styles.button} onPress={() => { setCategories('popular'); getListMovieLatest()}}>
        <Text style={styles.text}>Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {setCategories('top_rated'); getListMovieLatest()}}>
        <Text style={styles.text}>Top Rated</Text>
      </TouchableOpacity>  
      <TouchableOpacity style={styles.button} onPress={() =>{setCategories('now_playing'); getListMovieLatest()}}>
        <Text style={styles.text}>Now Playing</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.text}>Order by : {categories}</Text>
      <FlatList data = {movies} keyExtractor={(item,index)=> index} renderItem={cardView} />
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    alignSelf:'center',
    fontSize:18,
    paddingVertical: 8,
  },
  button: {
    backgroundColor: 'aqua',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius:10
  }


})