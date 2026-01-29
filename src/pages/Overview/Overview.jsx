import styles from "./Overview.module.scss";
import globalStyles from "../../global.module.scss";
import QuizCard from "../../components/QuizCard/QuizCard";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteQuiz, fetchQuizzes } from "../../features/quizzes/quizzesSlice";
import DeleteConfirmationModal from "../../components/modals/DeleteConfirmationModal/DeleteConfirmationModal";

const Overview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deletionQuizID, setDeletionQuizID] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { items: quizzes } = useSelector((state) => state.quizzes);
  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);
  const openModalHandler = (e, quizID) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setDeletionQuizID(quizID);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
    setDeletionQuizID(null);
  };
  const onConfirmDeletionHandler = () => {
    dispatch(deleteQuiz(deletionQuizID));
    closeModalHandler();
    //Polish: Loading state could be added here to improve UX
  };
  const editNavigatehandler = (e, quizID) => {
    e.stopPropagation();
    navigate(`/edit/${quizID}`);
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
          Quiz Maker
        </Typography>
        {Array.isArray(quizzes) && quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              id={quiz.id}
              title={quiz.name}
              onDeleteClick={openModalHandler}
              onEditClick={editNavigatehandler}
            />
          ))
        ) : (
          <Typography>No quizzes available.</Typography>
        )}
        <DeleteConfirmationModal
          open={isModalOpen}
          onClose={closeModalHandler}
          onConfirm={onConfirmDeletionHandler}
        />
      </Paper>
    </>
  );
};

export default Overview;
