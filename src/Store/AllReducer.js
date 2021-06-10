import {combineReducers} from 'redux';
import ReducerHome from '../Screens/Home/ReducerHome';
import ReducerLogin from '../Screens/Login/ReducerLogin';
import ReducerRegister from '../Screens/Register/ReducerRegister';
import GlobalReducer from './GlobalReducer';

export const AllReducer = combineReducers({
  Global: GlobalReducer,
  Home: ReducerHome,
  Login: ReducerLogin,
  Register: ReducerRegister,
});
