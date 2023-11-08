import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    data: 0,
  },
  reducers: {
    addData: (state, action) => {
      
      state.data = action.payload;
      
    },
  },
});

export const { addData } = transactionSlice.actions;

export default transactionSlice.reducer;
