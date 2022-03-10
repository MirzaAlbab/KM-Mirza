import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Poppins from '../components/Poppins';
import Feather from 'react-native-vector-icons/Feather';
import mobil from '../assets/images/icon.png'

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
      <View style={{alignItems:"flex-start",flex:1, marginLeft:15}}>
        <Poppins type='Regular' size={14}>{item.name}</Poppins>
        <View style={{ flexDirection:'row' }}>
          <Feather name="users" size={12} color="grey" />
          <Poppins type='Regular' size={12} ml={5} color='grey'>{item.people}</Poppins>
          <Feather name="briefcase" size={12} color="grey" style={{ marginLeft:10 }} />
          <Poppins type='Regular' size={12} ml={5} color="grey">{item.briefcase}</Poppins>
        </View>
        <Poppins color='green' size={14}>{item.price}</Poppins>
      </View>
    </View>
  );
}

export default class ListMobil extends React.Component {
  state = {
    data:[
    {
      name: "Daihatsu Xenia",
      people: 4,
      briefcase: 2,
      price: "Rp. 230.000",
      photo: "https://source.unsplash.com/random/100x100/?car"
    },
    {
      name: "Toyota Avanza",
      people: 4,
      briefcase: 2,
      price: "Rp. 400.000",
      photo: "https://source.unsplash.com/random/100x100/?car"
    },
    {
      name: "Pajero Sport",
      people: 4,
      briefcase: 2,
      price: "Rp. 700.000",
      photo: "https://source.unsplash.com/random/100x100/?car"
    },
    {
      name: "Royal Royce",
      people: 4,
      briefcase: 2,
      price: "Rp. 850.000",
      photo: "https://source.unsplash.com/random/100x100/?car"
    },
    {
      name: "Tesla Model S",
      people: 4,
      briefcase: 2,
      price: "Rp. 990.000",
      photo: "https://source.unsplash.com/random/100x100/?car"
    },
    {
      name: "Koenigsegg Agera RS",
      people: 4,
      briefcase: 2,
      price: "Rp. 990.000",
      photo: "https://source.unsplash.com/random/100x100/?car"
    },
    {
      name: "Bugatti Veyron 16.4",
      people: 4,
      briefcase: 2,
      price: "Rp. 990.000",
      photo: "https://source.unsplash.com/random/100x100/?car"
    },
    {
      name: "Lamborghini Aventador",
      people: 4,
      briefcase: 2,
      price: "Rp. 990.000",
      photo: "https://source.unsplash.com/random/100x100/?car"
    },
        
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop:10,
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#fff",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:10,
    borderColor: "grey",
    borderWidth: 0.4,
  }
});