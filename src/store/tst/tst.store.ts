import { createSlice } from "@reduxjs/toolkit";
import { FULFILLED, IDLE, PENDING } from "../../utils/api/api.client";
import { testHelloWorld } from "./tst.thunks";

const tstReducer = createSlice({
    name: "test",
    initialState: {
        status: IDLE,
        data: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(testHelloWorld.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = FULFILLED;
        });

        builder.addCase(testHelloWorld.pending, (state) => {
            state.status = PENDING;
        });
    },
});

export default tstReducer.reducer;
