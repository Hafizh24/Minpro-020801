import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";
import transactionReducer from "./transactionSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
        transaction: transactionReducer,
    event: eventSlice,
  },
});
