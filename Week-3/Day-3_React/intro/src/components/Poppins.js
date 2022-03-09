import React from 'react'
import {Text} from 'react-native'

const Poppins=({type = 'Regular',children,color})=>{
  return (
    <Text style={{ fontFamily:`Poppins-${type}`}}>{children}</Text>
  )
}
export default Poppins