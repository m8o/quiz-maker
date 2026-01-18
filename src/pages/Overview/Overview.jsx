import styles from "./Overview.module.scss";
import globalStyles from "../../global.module.scss";
import QuizCard from "../../components/QuizCard/QuizCard";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchQuizzes } from "../../features/quizzes/quizzesSlice";

const Overview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: quizzes } = useSelector((state) => state.quizzes);
  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <IconButton
        onClick={() => navigate("/create")}
        className={styles.fabButton}
      >
        <AddIcon />
      </IconButton>
      <Paper
        className={`${globalStyles.contentPaper} ${globalStyles.overview}`}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Quiz Overview
        </Typography>
        {Array.isArray(quizzes) ? (
          quizzes.map((quiz) => <QuizCard key={quiz.id} title={quiz.name} />)
        ) : (
          <Typography>No quizzes available.</Typography>
        )}
      </Paper>
    </div>
  );
};

export default Overview;
