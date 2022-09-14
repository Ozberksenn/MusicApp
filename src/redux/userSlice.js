import { createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../config";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    addUser: (state, action) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          action.payload.mail,
          action.payload.password
        );
      state.userInfo = action.payload;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { addUser, setUser } = userSlice.actions;

export default userSlice.reducer;
