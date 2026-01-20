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

export const getSingleQuiz = createAsyncThunk(
  "quizzes/getSingle",
  async (quizID) => {
    return await api.getSingleQuiz(quizID);
  }
);

export const updateSingleQuiz = createAsyncThunk(
  "quizzes/updateSingle",
  async (quizData) => {
    return await api.updateSingleQuiz(quizData);
  }
);

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: { items: [], singleItem: null, status: "idle" },
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
      })
      .addCase(getSingleQuiz.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleQuiz.fulfilled, (state, action) => {
        state.singleItem = action.payload;
        state.status = "succeeded";
      })
      .addCase(getSingleQuiz.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateSingleQuiz.fulfilled, (state, action) => {
        state.items = state.items.map((quiz) => {
          if (quiz.id === action.payload.id) {
            return action.payload;
          }
        });
      });
  },
});
export default quizzesSlice.reducer;
