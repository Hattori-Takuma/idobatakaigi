import { configureStore } from '@reduxjs/toolkit';
import selectUserReducer from '../features/selectUserSlice';

export const store = configureStore({
  reducer: {
    selectUser: selectUserReducer
  },
});