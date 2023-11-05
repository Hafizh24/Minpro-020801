import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";
import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionSlice";
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,,
        transaction: transactionReducer,
    event: eventSlice,
  },
});
