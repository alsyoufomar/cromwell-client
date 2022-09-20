import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login: { email: '', password: '' },
    register: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPass: '',
    },
  },
  reducers: {
    setLoginCredentials(state, action) {
      const loginData = action.payload;
      state.login.email = loginData.email;
      state.login.password = loginData.password;
    },
    setRegCredentials(state, action) {
      const registerData = action.payload;
      state.register.firstname = registerData.firstname;
      state.register.lastname = registerData.lastname;
      state.register.email = registerData.email;
      state.register.password = registerData.password;
      state.register.confirmPass = registerData.confirmPass;
    },
    setIsSuccess(state) {
      state.isSuccessful = true;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;
