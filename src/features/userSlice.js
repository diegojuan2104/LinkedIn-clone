import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value -= 1;
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
