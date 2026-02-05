import { useEffect, useState } from "react";
import globalStyles from "../../../global.module.scss";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../../features/questions/questionsSlice";

const ExistingQuestionModal = ({ open, onClose, onConfirm }) => {
  const dispatch = useDispatch();
  const { items: existingQuestions, status } = useSelector(
    (state) => state.questions,
  );
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const handleAddQuestion = () => {
    if (onConfirm && selectedQuestion) {
      onConfirm(selectedQuestion);
    }
    onClose();
  };
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuestions());
    }
  }, [dispatch]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select an existing question to add to your quiz</DialogTitle>
      <DialogContent>
        <Autocomplete
          options={existingQuestions}
          getOptionLabel={(option) => option.question}
          value={selectedQuestion}
          onChange={(event, value, reason) => {
            if (reason === "selectOption" && value) {
              setSelectedQuestion(value);
            } else if (reason === "clear" || !value) {
              setSelectedQuestion(null);
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Questions"
              margin="dense"
              variant="outlined"
            />
          )}
        />
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
          onClick={handleAddQuestion}
          color="success"
          variant="contained"
          disabled={!selectedQuestion}
          autoFocus
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExistingQuestionModal;
