// src/reducers.js
import { combineReducers } from 'redux';
import authReducer from '../components/store/auth/authSlice';
import profileReducer from '../components/store/profile/profileSlice';
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  // Add more reducers as needed
});

export default rootReducer;
