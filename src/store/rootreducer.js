// src/reducers.js
import { combineReducers } from 'redux';
import authReducer from '../components/store/auth/authSlice';
import profileReducer from '../components/store/profile/profileSlice';
import addressReducer from '../components/store/address/addressSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  address: addressReducer,
  // Add more reducers as needed
});

export default rootReducer;
