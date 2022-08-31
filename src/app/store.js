import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './pages/LoginSlice';
export const store = configureStore({
  reducer: {
    login:LoginReducer
  },
});
