import { configureStore } from "@reduxjs/toolkit";
import theme from "./themeSlice";
import user from "./userSlice";
import song from "./songsSlice";
export default configureStore({
  reducer: {
    theme,
    user,
    song,
  },
});
