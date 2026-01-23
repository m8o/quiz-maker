import React, { useEffect } from "react";
import globalStyles from "../../global.module.scss";
import QuizForm from "../../components/QuizForm/QuizForm";
import { Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleQuiz,
  updateSingleQuiz,
} from "../../features/quizzes/quizzesSlice";
import { useParams } from "react-router";

const EditQuiz = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { singleItem: quiz, status } = useSelector((state) => state.quizzes);
  useEffect(() => {
    dispatch(getSingleQuiz(params.id));
  }, [dispatch]);
  const handleUpdate = async (quizData) => {
    try {
      await dispatch(updateSingleQuiz(quizData)).unwrap();
      return true;
    } catch (_err) {
      alert("Failed to update a quiz!");
    }
  };
  return (
    <Paper className={globalStyles.contentPaper}>
      {quiz && status === "succeeded" ? (
        <QuizForm
          title={`Edit quiz ${quiz.id}`}
          quizData={quiz}
          handleRequest={handleUpdate}
        />
      ) : status === "failed" ? (
        <Typography>Failed to get the quiz</Typography>
      ) : (
        <Typography>Loading quiz...</Typography>
      )}
    </Paper>
  );
};

export default EditQuiz;
