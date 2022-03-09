import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import gambar from '../assets/Banner.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { ScrollView } from 'react-native-gesture-handler'

export default function ListMobil() {
  return (
    <View style={styles.list}>
      <Image source={gambar} style={styles.mobil}></Image>
      <View style={styles.listText}>
        <Text style={styles.namaMobil}>Daihatsu Xenia</Text>
        <View style={styles.detail}>
          <Icon name="people-outline" size={20} color="grey" />
          <Text>4</Text>
          <Icon name="shopping-bag" size={18} color="grey" style={{ marginLeft:10 }} />
          <Text>2</Text>
        </View>
          <Text style={{ color:'green', fontSize:16 }}>Rp. 230.000</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  list:{
    width: '90%',
    height:120,
    borderColor: 'grey',
    borderWidth:1,
    alignItems: 'center',
    alignSelf:'center',
    flexDirection:'row',
    borderRadius:10,
    marginBottom:10

  },
  listText:{
    marginLeft:20,
   
  },
  mobil:{
    width:60,
    height:60,
    marginLeft:20,
  },
  namaMobil:{
    fontSize:18,
    color:'#000'
  },
  detail:{
    flexDirection:'row',
    
  }

})