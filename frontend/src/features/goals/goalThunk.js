import { goalService } from "./goalService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import message from "../axiosError";

export const createGoal = createAsyncThunk(
  "goal/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.createGoal(data, token);
    } catch (error) {
      const errorMessage = message(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getGoals = createAsyncThunk(
  "goal/getGoal",
  async (_, thunkAPI) => {
    try {
      const { _id, token } = thunkAPI.getState().auth.user;
      return await goalService.getGoals(_id, token);
    } catch (error) {
      const errorMessage = message(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteGoal = createAsyncThunk(
  "goal/delete",
  async (postId, thunkAPI) => {
    try {
      const { token, _id } = thunkAPI.getState().auth.user;
      console.log("token=>>>>", token, "\nuser=>>>>>", _id);
      const response = await goalService.deleteGoal(postId, _id, token);
      return response;
    } catch (error) {
      const errorMessage = message(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
