import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    data: 0,
    count: 0
  },
  reducers: {
    addData: (state, action) => {
      
      state.data = action.payload;
      
    },
    addCount: (state, action) => {
      state.count = action.payload
    }
  },
});

export const { addData, addCount } = transactionSlice.actions;

export default transactionSlice.reducer;
