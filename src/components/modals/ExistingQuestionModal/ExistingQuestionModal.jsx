import { useState } from "react";
import globalStyles from "../../../global.module.scss";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Autocomplete,
} from "@mui/material";

const existingQuestions = [
  { id: "q1", text: "What is React?" },
  { id: "q2", text: "Explain Redux Toolkit." },
  { id: "q3", text: "How does useEffect work?" },
];
const ExistingQuestionModal = ({ open, onClose }) => {
  const [selectedId, setSelectedId] = useState(null);
  const handleAddQuestion = () => {
    if (selectedId) {
      // TODO: Add question to quiz form state using redux
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select an existing question to add to your quiz</DialogTitle>
      <DialogContent>
        {/*TODO Add select field with virtualised list of options and search (autocomplete input) */}
        {/* <Autocomplete
          options={existingQuestions}
          value={selectedId}
          onChange={(event, value, reason) => {
            if (reason === "selectOption" && value) {
              setSelectedId(value.id);
            } else if (reason === "clear" || !value) {
              setSelectedId(null);
            }
          }}
        /> */}
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
          autoFocus
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExistingQuestionModal;
