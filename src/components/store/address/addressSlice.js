import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: {
    address_line1: null,
    address_line2: null,
    city: null,
    state: null,
    postal_code: null,
  },
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress(state, action) {
      state.address = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setAddress, setLoading, setError } = addressSlice.actions;
export default addressSlice.reducer;