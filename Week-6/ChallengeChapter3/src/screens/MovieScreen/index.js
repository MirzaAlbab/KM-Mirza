<script src="http://192.168.142.2:8097"></script>
import { View, Text, FlatList, ScrollView,StyleSheet, TouchableOpacity, SafeAreaView, Dimensions  } from 'react-native'
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import { AllMovie } from '../../helpers/Api'
import IconStar from 'react-native-vector-icons/Ionicons'
import { moderateScale } from 'react-native-size-matters';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Monserrat from '../../components/Monserrat';
import Loading from '../../components/Loading';
import Material from 'react-native-vector-icons/MaterialIcons'

export default function MovieScreen({ navigation, route }) {
  
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const [favorite, setFavorite] = useState(false);
  useEffect(()=>{
    getSingleMovie();
  },[]);
  const getSingleMovie = async () => {
    try {
      setLoading(true);
      const results = await axios.get(`${AllMovie}/${route.params.id}`);
      console.log(results)
      setMovie(results.data);
      console.log(movie.genres)
      setCast(results.data.credits.cast);
      setGenres(results.data.genres);
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  };
  
  const CardActor = ({item}) => {
    return (
      <View style={{
        width: Dimensions.get('window').width/3,
        alignItems: 'center',
        marginTop: 10, }}>
        <FastImage source={{uri: `${item.profile_path}`}} style={{
          height:moderateScale(100), width: moderateScale(100), borderRadius: 5 }} />
        <Monserrat color='white' size={12}>{item.name}</Monserrat>
      </View>
    )
  }

  
  return (
    loading ? <View style={styles.progressBar}><Loading /></View>
    :
    <ScrollView>
      <View >
				<View style={styles.container}>
					<FastImage source={{ uri: `${movie.backdrop_path}` }} style={{ width:widthPercentageToDP('100%'), height:moderateScale(200) }} />
          <Material name="arrow-back" size={30} color="white" style={{position: 'absolute', top: moderateScale(10), left: moderateScale(10), backgroundColor:'#1a1a1a',padding:3,borderRadius:20}} onPress={()=>navigation.goBack()} />
          <Material name="favorite" size={25} color={favorite ? 'red': 'white'} style={{position: 'absolute', top: moderateScale(10), right: moderateScale(45), backgroundColor:'#1a1a1a',padding:3,borderRadius:15}} onPress={()=> setFavorite(!favorite)}/>
          <Material name="share" size={25} color="white" style={{position: 'absolute', top: moderateScale(10), right: moderateScale(10), backgroundColor:'#1a1a1a',padding:3,borderRadius:15}} onPress={()=> alert('share coming soon')} />
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
            marginTop: moderateScale(-80)
          }}>
          <FastImage
            source={{uri: `${movie.poster_path}`}}
            style={{height: moderateScale(150), width:moderateScale(150), borderRadius: 5, flex: 1}}
          />
            <View style={{marginStart: 10, flex: 1}}>
              <Monserrat type='Bold' size={16} color='white'>{movie.title}</Monserrat>
              
              <Monserrat
                color='white' size={12} marginTop={10}>
                {movie.tagline}
              </Monserrat>
              <Monserrat
                color='white' size={12} marginTop={10}>
                {movie.status}
              </Monserrat>
            
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                
                  <Monserrat
                    color='white' size={12} marginTop={10}>
                    {movie.release_date}
                  </Monserrat>
                  
                  <Monserrat
                    color='white' size={12} marginTop={10}>
                    <FontAwesome name='star' color='yellow' size={15}/> {movie.vote_average}
                  </Monserrat>

                  <Monserrat
                    color='white' size={12} marginTop={10}>
                    {movie.runtime}
                  </Monserrat>
                </View>
            </View>
          </View>
          <View style={{ paddingHorizontal:moderateScale(15) }}>
            <Monserrat type='Bold' size={16} color='white' marginTop={10}>Genre</Monserrat>
            <Monserrat color='white' size={12} marginTop={10}>{genres.map(item => item.name).join(', ')}</Monserrat>
            
            <Monserrat type='Bold' size={16} color='white' marginTop={10}>Synopsis</Monserrat>
            <Monserrat  size={12} color='white' marginTop={10}>{movie.overview}</Monserrat>

            <Monserrat type='Bold' size={16} color='white' marginTop={10}>Actor/Artist</Monserrat>
            <View style={{
              marginLeft:moderateScale(-15),
              width: Dimensions.get('window').width,
              flexDirection: 'row',
              alignItems: 'center',
              
            }}>
              <FlatList 
              data={cast} 
              keyExtractor={(item, index) => index} 
              renderItem={CardActor} 
              numColumns={3} style={{
              width: Dimensions.get('window').width,
              }}/>
            </View>
            
          </View>
				</View>
			</View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    position:'relative'
  },
  progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	
});