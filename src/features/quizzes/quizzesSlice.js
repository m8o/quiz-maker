import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchQuizzes = createAsyncThunk("quizzes/fetchAll", async () => {
  return await api.getQuizzes();
});

export const createQuiz = createAsyncThunk(
  "quizzes/create",
  async (quizData) => {
    return await api.createQuiz(quizData);
  }
);

export const deleteQuiz = createAsyncThunk("quizzes/delete", async (quizID) => {
  return await api.deleteQuiz(quizID);
});

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.items = state.items.filter((quiz) => quiz.id !== action.meta.arg);
      });
  },
});
export default quizzesSlice.reducer;
