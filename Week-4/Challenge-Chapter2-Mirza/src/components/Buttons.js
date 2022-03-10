import { View,TouchableOpacity, StyleSheet }  from 'react-native'
import React from 'react'
import Poppins from './Poppins'
const Buttons = ({
  onPress, 
  children, 
  w=50,
  h=50,
  bg='blue',
  as='center',
  jc='center',
  br=0,
  mt=0,

  }) => {
  const styles = StyleSheet.create({
    button:{
      width:w,
      height:h,
      backgroundColor:bg,
      alignSelf:as,
      borderRadius:br,
      marginTop:mt,
      justifyContent:jc
    }
  })
  return (
    <View>
      <TouchableOpacity style={styles.button} >
        <Poppins color='white' type='SemiBold' size={18} ta='center'>{children}</Poppins>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    width: 100,
  }
})

export default Buttons