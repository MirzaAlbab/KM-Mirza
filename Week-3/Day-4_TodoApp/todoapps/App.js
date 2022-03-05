/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { StyleSheet,Text,TextInput,TouchableOpacity,View,KeyboardAvoidingView, Keyboard } from 'react-native';
import Todo from './components/TodoList';


const App = () => {

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const handleAddTask = () => {
    Keyboard.dismiss()
    setTodos([...todos, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...todos]
    itemsCopy.splice(index, 1)
    setTodos(itemsCopy)
  }
  return (
    
    <View style={styles.container}>
      {/* {Today task} */}
      
      <View style={styles.todayTask}>
        <Text style={styles.sectionTitle}>To-do List</Text>

        <View style={styles.items}>
        {
          todos.map((item,index) => {
            return (
            <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Todo text={item}/>
            </TouchableOpacity> 
            )
          })
        }
        
        </View>
      </View>



      {/* {Write task} */}
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.writeTask}>

        <TextInput style={styles.writeTaskInput} placeholder="Write your task here" onChangeText={text => setTask(text)} value={task}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      
      </KeyboardAvoidingView>
    </View>
    
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  todayTask:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    color:'#000'
  },
  items:{
    marginTop:30
  },
  writeTask:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
writeTaskInput:{
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor:'#fff',
  borderRadius:60,
  borderColor:'#c0c0c0',
  borderWidth:1,
  width:250
},

addButton:{
  width:60,
  height:60,
  backgroundColor:'#fff',
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#c0c0c0',
  borderWidth:1,
},
addText:{},
});

export default App;
