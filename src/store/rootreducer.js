// src/reducers.js
import { combineReducers } from 'redux';
import authReducer from '../components/store/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers as needed
});

export default rootReducer;
