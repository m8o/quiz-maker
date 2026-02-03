import { useState } from "react";
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

const existingQuestions = [
  { id: "q1", question: "What is React?", answer: "A JavaScript library." },
  {
    id: "q2",
    question: "What is Redux Toolkit?",
    answer: "A set of tools for efficient Redux development.",
  },
  {
    id: "q3",
    question: "How does useEffect work?",
    answer: "It runs side effects in functional components.",
  },
];
const ExistingQuestionModal = ({ open, onClose, onConfirm }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const handleAddQuestion = () => {
    if (onConfirm && selectedQuestion) {
      onConfirm(selectedQuestion);
    }
    onClose();
  };

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
