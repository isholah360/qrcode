// authSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null, 
  isAuthenticated: false, 
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload)); 
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user'); 
    },
  },
});

export const { login, logout } = authSlice.actions; 
export default authSlice.reducer; 
