import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api.client";
import { IErrorResponseData } from "../../api/api.types";

export const testHelloWorld = createAsyncThunk("test/helloWorld", async () => {
  const response = await API.test();
  return response.data;
});

export const testError = createAsyncThunk<
  IErrorResponseData,
  void,
  {
    rejectValue: IErrorResponseData;
  }
>("test/Error", async () => {
  try {
    const response = await API.error();
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});
