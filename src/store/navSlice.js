import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: { isDark: false },
  reducers: {
    makeDark(state) {
      state.isDark = true;
    },
    makeTrans(state) {
      state.isDark = false;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
