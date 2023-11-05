import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    value: {},
    city: ["Jakarta", "Solo", "Bandung"],
    category: ["Seminars", "Festivals", "Match", "Concert"],
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setData } = eventSlice.actions;
export default eventSlice.reducer;
