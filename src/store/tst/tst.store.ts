import { createSlice } from "@reduxjs/toolkit";
import {
  FULFILLED,
  IDLE,
  IErrorResponseData,
  ITestResponseData,
  PENDING,
} from "../../api/api.types";
import { testError, testHelloWorld } from "./tst.thunks";
import { ITestState } from "./tst.types";

const initialState: ITestState = {
  status: IDLE,
  data: {} as ITestResponseData,
  errors: [] as IErrorResponseData[],
};

const tstReducer = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(testHelloWorld.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = FULFILLED;
    });

    builder.addCase(testHelloWorld.pending, (state) => {
      state.status = PENDING;
    });

    builder.addCase(testError.fulfilled, (state, action) => {
      state.status = FULFILLED;
      state.errors = action.payload;
    });

    builder.addCase(testError.pending, (state) => {
      state.status = PENDING;
    });
  },
});

export const tstActions = tstReducer.actions;
export default tstReducer.reducer;
