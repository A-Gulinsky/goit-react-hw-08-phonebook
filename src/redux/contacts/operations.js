// redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios/toast
import axios from "axios";
import { toast } from "react-toastify";

// BASE URL
axios.defaults.baseURL = `https://connections-api.herokuapp.com`


// get contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (credentials, thunkAPI) => {
    
    try {
      
      const res = await axios.get('/contacts')

      return res.data

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// delete contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, thunkAPI) {
  
    try {
      
      const res = await axios.delete(`/contacts/${id}`)

      return res.data
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }

      
)

// add contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {

    try {
      
      const res = await axios.post('/contacts', credentials)

      return res.data

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// edit contact
export const editContact = createAsyncThunk(
  'contacts/editContact',
  async({id, name , number}, {rejectWithValue}) => {
    
    try {

      const res = await axios.patch(`/contacts/${id}`, {name,number})

      return res.data
    } catch (error) {
      return rejectWithValue(toast.error(error.message))
    }
  }
)