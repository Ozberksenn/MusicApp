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
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
