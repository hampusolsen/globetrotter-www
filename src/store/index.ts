import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { PRODUCTION } from "../config/constants.config";
import userReducer from "./user/user.store";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;

export const reducer = combineReducers({
  user: userReducer
});

const store = configureStore({
  devTools: process.env.NODE_ENV !== PRODUCTION,
  reducer
});

export const { dispatch } = store;
export const select: TypedUseSelectorHook<RootState> = useSelector;

export default store;
