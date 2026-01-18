import styles from "./Overview.module.scss";
import globalStyles from "../../global.module.scss";
import QuizCard from "../../components/QuizCard/QuizCard";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchQuizzes } from "../../features/quizzes/quizzesSlice";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

const Overview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deletionQuizID, setDeletionQuizID] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { items: quizzes } = useSelector((state) => state.quizzes);
  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);
  const openModalHandler = (quizID) => {
    setIsModalOpen(true);
    setDeletionQuizID(quizID);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
    setDeletionQuizID(null);
  };
  const onfirmDeletionHandler = () => {
    closeModalHandler();
  };
  return (
    <>
      <IconButton
        onClick={() => navigate("/create")}
        className={styles.fabButton}
      >
        <AddIcon />
      </IconButton>
      <Paper className={`${globalStyles.contentPaper} ${styles.overview}`}>
        <Typography variant="h4" align="center" gutterBottom>
          Quiz Overview
        </Typography>
        {Array.isArray(quizzes) ? (
          quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              id={quiz.id}
              title={quiz.name}
              onDeleteClick={openModalHandler}
            />
          ))
        ) : (
          <Typography>No quizzes available.</Typography>
        )}
        <ConfirmationModal
          open={isModalOpen}
          onClose={closeModalHandler}
          onConfirm={onfirmDeletionHandler}
        />
      </Paper>
    </>
  );
};

export default Overview;
