import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    ui: uiReducer,
  },
});
