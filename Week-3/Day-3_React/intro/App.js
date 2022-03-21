import React, { useEffect} from 'react';
import MainRoute from './src/routes/MainRoute';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

//state adalah data yang hanya bisa diakses oleh component yang memiliki state
// pengecualian jika data tersebut dikirimkan melalui props
const App = () => {

  useEffect(() => {
    SplashScreen.hide();
   }, [])
  return (

  <NavigationContainer>
    <MainRoute />
  </NavigationContainer>
  )












  // const [firstName, setFirstName] = useState('Aldi')
  // const [age, setAge] = useState(20)
  // if(firstName === 'Aldi'){
  //   return (
  //     <View style={styles.container}>
  //       <TouchableOpacity onPress={() => setFirstName('Bukan Aldi')}>
  //         <Text>Change Nama Atas</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // } else{
  //   return (
  //     <View >
  //       <View style={styles.header}>
  //         <Text>Hi, Teen</Text>
  //         <Text>Your Location</Text>
  //       </View>
  //       <Photo />

  //       <Text>Your Name: {firstName} dan saya berumur: {age} tahun {' '}</Text>
  //       <TouchableOpacity onPress={() => setFirstName('Aldi')}>
  //         <Text>Change Name Bawah</Text>
  //       </TouchableOpacity>

  //       <Render kandidat='Dika' firstName={firstName}/>
  //       <Render nama='Dina'/>
  //       <Render nama='Desa'/>
  //     </View>
  //   )
  // }
}





// const styles = StyleSheet.create({
//   header:{
//     width: '100%',
//     height: 150,
//     backgroundColor: '#99CEEB',
//   }
// });

export default App;

// fix running script disabled
// Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted