import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api.client";

export const testHelloWorld = createAsyncThunk("test/helloWorld", async () => {
  const response = await API.test();
  return response.data;
});

export const testError = createAsyncThunk("test/Error", async () => {
  const response = await API.error();
  return response.errors;
});
