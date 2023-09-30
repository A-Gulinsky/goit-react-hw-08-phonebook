
import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, registerUser } from "./operations";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
  },
  extraReducers: builder =>
    // register  
    builder
    .addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true
    })
    // login
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true
    })
    // logout
    .addCase(logout.fulfilled, (state, action) => {
      state.user = { name: null, email: null }
      state.token = null
      state.isLoggedIn = false
    })
  // REFRESH
    .addCase(refresh.pending, (state, action) => {
      state.isRefreshing = true  
    })
    .addCase(refresh.fulfilled, (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
      state.isRefreshing = false
    })
    .addCase(refresh.rejected, (state, action) => {
      state.isRefreshing = false  
    })
})

export const authReducer = authSlice.reducer