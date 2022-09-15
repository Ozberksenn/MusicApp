import { createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    addUser: (state, action) => {
      AsyncStorage.setItem("userKey", JSON.stringify(action.payload));
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          action.payload.mail,
          action.payload.password
        );
      state.userInfo = action.payload;
    },
    setUser: (state, action) => {
      AsyncStorage.setItem("userKey", JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    updateUser: (state, action) => {
      AsyncStorage.setItem("userKey", JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },
    logOut: (state, action) => {
      AsyncStorage.removeItem("userKey");
      state.userInfo = action.payload;
    },
  },
});

export const { addUser, setUser, updateUser, logOut } = userSlice.actions;

export default userSlice.reducer;
