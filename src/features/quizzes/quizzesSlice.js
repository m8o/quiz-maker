import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchQuizzes = createAsyncThunk("quizzes/fetchAll", async () => {
  const response = await api.getQuizzes();
  return response;
});

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuizzes.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export default quizzesSlice.reducer;
