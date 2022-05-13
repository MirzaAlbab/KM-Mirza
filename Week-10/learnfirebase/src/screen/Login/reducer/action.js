import {setLoading} from '../../../store/globalAction';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {navigate} from '../../../helper/navigate';
export const SignInAuth = (email, password) => async dispatch => {
  dispatch(setLoading(true));
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(e => {
      dispatch(setUser(e));
      dispatch(setLoading(false));
      navigate('Main');
    })
    .catch(() => {
      dispatch(setLoading(false));
      Alert.alert('Invalid credentials');
    });
};

export const setUser = payload => {
  return {
    type: 'SET_USER',
    payload,
  };
};
