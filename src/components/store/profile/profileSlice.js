import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: null,
    phoneNumber: null,
    email: null,
    userType: null,
    loginTime: null,
  },
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = profileSlice.actions;