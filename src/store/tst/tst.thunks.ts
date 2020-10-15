import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api/api.client";

export const testHelloWorld = createAsyncThunk("test/helloWorld", async () => {
    const response = await API.test();
    return response.data;
});
