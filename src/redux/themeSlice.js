import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    activeTheme: dark,
  },
  reducers: {
    toggle: (state) => {
      return {
        activeTheme: state.activeTheme.type === "light" ? dark : light,
      };
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
