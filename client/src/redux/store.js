import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})