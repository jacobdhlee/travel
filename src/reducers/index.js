import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignupReducer from './SignupReducer';
import PictureReducer from './PictureReducer';

export default combineReducers({
  auth: AuthReducer,
  signup: SignupReducer,
  picture: PictureReducer,
})