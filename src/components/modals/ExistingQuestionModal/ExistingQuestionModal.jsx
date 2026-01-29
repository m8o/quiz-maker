import globalStyles from "../../global.module.scss";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const ExistingQuestionModal = ({ open, onClose, onConfirm, message }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select an existing question to add to your quiz</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {message || "This action cannot be undone."}
        </DialogContentText>
        {/*TODO Add select field with virtualised list of options and search (autocomplete input) */}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="outlined"
          className={globalStyles.cancelButton}
        >
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained" autoFocus>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExistingQuestionModal;
