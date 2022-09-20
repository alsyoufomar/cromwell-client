import { configureStore } from '@reduxjs/toolkit';
import popupSlice from './popupSlice';
import userSlice from './userSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
