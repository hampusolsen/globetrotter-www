import { createSlice } from "@reduxjs/toolkit";
import { IDLE } from "../../api/api.types";
import { IUserData, IUserState } from "./user.types";

const userData: IUserData = {
  username: "",
  followers: 0,
  following: 0,
  profile_pic: "",
  travels: [],
  description: "",
  created_at: ""
};

const initialState: IUserState = {
  data: userData,
  status: IDLE
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {}
});

export default userSlice.reducer;
