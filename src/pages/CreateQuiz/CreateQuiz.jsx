import React from "react";
import globalStyles from "../../global.module.scss";
import QuizForm from "../../components/QuizForm/QuizForm";
import { Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { createQuiz } from "../../features/quizzes/quizzesSlice";
const emptyQuizData = {
  name: "",
  questions: [
    {
      question: "",
      answer: "",
    },
  ],
};
const CreateQuiz = () => {
  const dispatch = useDispatch();
  const handleCreate = async (quizData) => {
    try {
      await dispatch(createQuiz(quizData)).unwrap();
      return true;
    } catch (_err) {
      alert("Failed to create a quiz!");
    }
  };
  return (
    <Paper className={globalStyles.contentPaper}>
      <QuizForm
        title="Create a new quiz"
        quizData={emptyQuizData}
        handleRequest={handleCreate}
      />
    </Paper>
  );
};

export default CreateQuiz;
