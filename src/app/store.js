import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import questionsReducer from "../features/questions/questionsSlice";
import uiReducer from "../features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
    questions: questionsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["ui.modal.props"],
        ignoredActions: ["ui/openModal"],
      },
    }),
});
