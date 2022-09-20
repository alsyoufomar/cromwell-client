import { createSlice } from '@reduxjs/toolkit';
const host = process.env.REACT_APP_API_URL;

const userSlice = createSlice({
  name: 'user',
  initialState: { userData: {} },
  reducers: {
    loadUser(state, action) {
      state.userData = action.payload;
    },
  },
});

export const getUser = () => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
    };
    fetch(`${host}/user/info`, options)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
          throw Error('could not fetch the data from the source');
        }
        return res.json();
      })
      .then((res) => {
        dispatch(userAction.loadUser(res.user));
      })
      .catch((err) => console.log(err));
  };
};

export const userAction = userSlice.actions;

export default userSlice;
