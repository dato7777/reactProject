import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './LoginAPI';
import jwt_decode from "jwt-decode";

// state-data (initial data)
const initialState = {
  userName: "",
  email: "",
  token: "",
  logged: false,
  staff: false
};

// simple async method(component can call it)
// async (1)
export const signInAsync = createAsyncThunk(
  'login/signIn',
  async (action) => {
    const response = await signIn(action);
    // console.log(state.token)
    return response.data;
  }
);

export const signUpAsync = createAsyncThunk(
  'login/signUp',
  async (cred) => {
    console.log(cred)
    const response = await signUp(cred);
    return response.data;
  }
);

export const LoginSlice = createSlice({

  name: 'login',
  initialState,
  reducers: {
    signOut: (state) => {
      state.token = "";
      state.logged = false;
      state.userName = ""
      state.email = ""
      localStorage.removeItem('token')
    }

  },
  // happens when async is done - callback
  // async (3)
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.fulfilled, (state, action) => {
        if (action.payload.access) {
          // localStorage.getItem('token')
          state.token = action.payload.access;
          state.logged = true;
          state.userName = jwt_decode(action.payload.access).username;
          state.email = jwt_decode(action.payload.access).email;
          // state.staff = jwt_decode(action.payload.access).staff;
          console.log(jwt_decode(action.payload.access).username)
        }

      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.token = "";
        state.logged = false;
        state.userName = ""
        state.email = ""
      }

      );
  },
});
// export of sync methods only
export const { signOut} = LoginSlice.actions;
// export of any part of the state

export const selectLogged = (state) => state.login.logged;
export const selectEmail = (state) => state.login.email;
export const selectUserName = (state) => state.login.userName;
export const selectToken = (state) => state.login.token;
export const selectStaff = (state) => state.login.staff;
// export reducer to the application
export default LoginSlice.reducer;
