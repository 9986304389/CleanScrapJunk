// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootreducer';
import myMiddleware from './Middleware'; // Import your middleware function

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;
