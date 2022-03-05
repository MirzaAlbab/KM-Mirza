import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoList = (props) =>{
  return (
    <View style={styles.item}>
      <View style={styles.itemIcon}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemCircle}></View>
    </View>

    
    
  )
}
const styles = StyleSheet.create({
  item :{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20
  },
itemIcon :{
  flexDirection:'row',
  alignItems:'center',
  flexWrap:'wrap'
},
square :{
  width:24,
  height:24,
  backgroundColor:'#558cf6',
  opacity:0.4,
  borderRadius:5,
  marginRight:15
},
itemText :{
  maxWidth:'80%',
},
itemCircle :{
  width:12,
  height:12,
  borderColor:'#558cf6',
  borderWidth:2,
  borderRadius:5
},

})

export default TodoList;