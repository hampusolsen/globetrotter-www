import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PRODUCTION } from "../config/constants.config";
import { AppDispatch, RootState } from "./store.types";
import testReducer from "./tst/tst.store";
import userReducer from "./user/user.store";

export const storeDispatch: AppDispatch = useDispatch;
export const storeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const reducer = {
    test: testReducer,
    user: userReducer,
};

const store = configureStore({
    devTools: process.env.NODE_ENV !== PRODUCTION,
    reducer,
});

export default store;
