import React from "react";
import globalStyles from "../../global.module.scss";
import QuizForm from "../../components/QuizForm/QuizForm";
import { Paper } from "@mui/material";
const questions = [
  {
    question: "",
    answer: "",
  },
];
const CreateQuiz = () => {
  return (
    <Paper className={globalStyles.contentPaper}>
      <QuizForm title="Create a new quiz" initialQuestions={questions} />
    </Paper>
  );
};

export default CreateQuiz;
