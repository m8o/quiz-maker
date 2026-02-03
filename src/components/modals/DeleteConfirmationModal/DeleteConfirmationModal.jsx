import { useDispatch } from "react-redux";
import globalStyles from "../../../global.module.scss";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { deleteQuiz } from "../../../features/quizzes/quizzesSlice";

const DeleteConfirmationModal = ({ open, onClose, quizID }) => {
  const dispatch = useDispatch();
  const handleConfirm = () => {
    if (typeof quizID === "number") {
      dispatch(deleteQuiz(quizID));
    }
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to delete this quiz?</DialogTitle>
      <DialogContent>
        <DialogContentText>This action cannot be undone.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          className={globalStyles.cancelButton}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          color="error"
          variant="contained"
          autoFocus
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
