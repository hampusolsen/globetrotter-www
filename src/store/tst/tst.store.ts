import { createSlice } from "@reduxjs/toolkit";
import {
  FULFILLED,
  IDLE,
  IErrorResponseData,
  ITestResponseData,
  PENDING,
  REJECTED
} from "../../api/api.types";
import { testError, testHelloWorld } from "./tst.thunks";
import { ITestState } from "./tst.types";

const initialState: ITestState = {
  status: IDLE,
  data: {} as ITestResponseData,
  errors: []
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

    builder.addCase(testHelloWorld.rejected, (state) => {
      state.status = REJECTED;
    });

    builder.addCase(testError.rejected, (state, action) => {
      state.errors.push(action.payload as IErrorResponseData);
    });
  }
});

export const tstActions = tstReducer.actions;
export default tstReducer.reducer;
