import React from 'react'
import {Text,StyleSheet} from 'react-native'

  const Poppins=({
    type = 'Regular',
    children,
    color='black',
    size=12,
    ml=0,
    mr=0,
    ph=0,
    ta='left',
    mt=0,
    mb=0
    
  })=>{
  const style = StyleSheet.create({
    text:{
      fontFamily:`Poppins-${type}`,
      color:color,
      fontSize:size,
      marginLeft:ml,
      marginRight:mr,
      marginTop:mt,
      paddingHorizontal:ph,
      textAlign: ta,
      marginBottom:mb
    }
  })
  return (
    <Text style={style.text}>{children}</Text>
  )
}
export default Poppins