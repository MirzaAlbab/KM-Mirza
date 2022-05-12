import {setLoading} from '../../../store/globalAction';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {navigate} from '../../../helper/navigate';
export const SignInAuth = (email, password) => async dispatch => {
  dispatch(setLoading(true));
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(setUser(email));
      navigate('Main');
    })
    .catch(() => {
      Alert.alert('Invalid credentials');
    });
  dispatch(setLoading(false));
};

export const setUser = payload => {
  return {
    type: 'SET_USER',
    payload,
  };
};
