import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosIntance from "../config/axios";
const initialState = {
  task: [],
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.task = action.payload;
    });
  },
});

export const fetchTask = createAsyncThunk("task/fetchTask", async () => {
  try {
    const res = await axiosIntance.get("/tasks");
    return res?.data?.tasks;
  } catch (error) {
    console.log(error);
  }
});

export default taskSlice.reducer;
