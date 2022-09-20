import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isPoped: false,
    errMessage: '',
  },
  reducers: {
    throwErr(state) {
      state.isPoped = true;
    },
    fixErr(state) {
      state.isPoped = false;
    },
    setErrMessage(state, action) {
      state.errMessage = action.payload;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice;
