import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
export const fetchQuestions = createAsyncThunk(
  "questions/fetchAll",
  async () => {
    return await api.getQuestions();
  },
);
export const resetQuestionsState = (state) => {
  state.status = "idle";
};
const questionsSlice = createSlice({
  name: "questions",
  initialState: { items: [], status: "idle" },
  reducers: { resetQuestionsState },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    });
  },
});
export const { resetQuestionsState: resetQuestionsStateAction } =
  questionsSlice.actions;
export default questionsSlice.reducer;
