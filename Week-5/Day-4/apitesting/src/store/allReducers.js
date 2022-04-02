import {combineReducers} from 'redux';
import ProfileReducer from '../screens/Profile/redux/reducer';
import MovieReducer from '../screens/Home/redux/reducer';
import LoginReducer from '../screens/Login/redux/reducer';
import RegisterReducer from '../screens/Register/redux/reducer';
import { globalReducer } from './globalreducer';

export const allReducers = combineReducers({
  profile: ProfileReducer,
  movie: MovieReducer,
  login: LoginReducer,
  register: RegisterReducer,
  global: globalReducer
});