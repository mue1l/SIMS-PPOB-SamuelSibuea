import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    updateUserProfile: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    logout: (state) => {
      state.userInfo = {};
      state.isLoggedIn = false;
    },
  },
});

export const { setUserInfo, updateUserProfile, logout } = userSlice.actions;
export default userSlice.reducer;
