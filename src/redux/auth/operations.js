// redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios/toast
import axios from "axios";
import { toast } from "react-toastify";

// BASE URL
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// register User
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, { rejectWithValue }) => {
    
    try {
      
      const res = await axios.post('/users/signup', credentials)

      setAuthHeader(res.data.token)

      return res.data

    } catch (error) {
      return rejectWithValue(toast.error(error.message))
    }
  }
)

// loginUser
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    
    try {
      
      const res = await axios.post('/users/login', credentials)
      setAuthHeader(res.data.token)

      return res.data

    } catch (error) {
      return rejectWithValue(toast.error(error.message))
    }
  }
)

// Logout User
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    
    try {
      
      await axios.post('/users/logout')
      clearAuthHeader()

    } catch (error) {
      return rejectWithValue(toast.error(error.message))
    }
  }
)

// REFRESH
export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, {rejectWithValue, getState}) => {
    
    const { token } = getState().auth

    if (!token) {
      return rejectWithValue(`Token not found`)
    }

    setAuthHeader(token)

    try {
      
      const res = await axios.get('/users/current')

      return res.data

    } catch (error) {
      return rejectWithValue(toast.error(error.message))
    }
  }
)