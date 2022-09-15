import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
  name: "song",
  initialState: {
    likedSongs: [],
  },
  reducers: {
    addSong: (state, action) => {
      state.likedSongs.push(action.payload);
      console.log("added");
    },
    removeSong: (state, action) => {},
  },
});

export const { addSong, removeSong } = songsSlice.actions;

export default songsSlice.reducer;
