import React, { useEffect } from "react";
import globalStyles from "../../global.module.scss";
import QuizForm from "../../components/QuizForm/QuizForm";
import { Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSingleQuiz } from "../../features/quizzes/quizzesSlice";
import { useParams } from "react-router";

const EditQuiz = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { singleItem: quiz } = useSelector((state) => state.quizzes);
  useEffect(() => {
    dispatch(getSingleQuiz(params.id));
  }, [dispatch]);
  const handleUpdate = async (quizData) => {
    // try {
    //   await dispatch(updateSingleQuiz(quizData)).unwrap();
    //   return true;
    // } catch (_err) {
    //   alert("Failed to update a quiz!");a
    // }
  };
  return (
    <Paper className={globalStyles.contentPaper}>
      {quiz ? (
        <QuizForm
          title={`Edit quiz ${quiz.id}`}
          initialQuizName={quiz.name}
          initialQuestions={quiz.questions}
          handleRequest={handleUpdate}
        />
      ) : (
        <Typography>Loading quiz...</Typography>
      )}
    </Paper>
  );
};

export default EditQuiz;
