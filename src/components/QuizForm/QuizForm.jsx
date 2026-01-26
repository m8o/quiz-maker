import globalStyles from "../../global.module.scss";
import styles from "./QuizForm.module.scss";
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";

const QuizForm = ({
  title,
  quizData: { name: initialQuizName, questions: initialQuestions, id } = {},
  handleRequest,
}) => {
  const [quizName, setQuizName] = useState(initialQuizName);
  const [questions, setQuestions] = useState(initialQuestions);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleRequest({ name: quizName, questions, id });
    if (success) navigate("/");
  };
  const handleDeleteQuestion = (index) => {
    setQuestions((currentQuestions) => {
      const updated = currentQuestions.filter((_, i) => i !== index);
      return updated;
    });
  };
  const handleEditQuestion = (index, event) => {
    if (!event?.target?.name) return;
    const { name, value } = event.target;
    setQuestions((currentQuestions) =>
      currentQuestions.map((question, i) => {
        if (i === index) return { ...question, [name]: value };
        return question;
      })
    );
  };
  return (
    <>
      <Button
        className={styles.cancelButton}
        onClick={() => navigate("/")}
        variant="outlined"
      >
        ← Back
      </Button>
      <Box component="form" onSubmit={handleSubmit}>
        <Card className={`${styles.card} ${styles.nameCard}`}>
          <CardContent>
            <Typography variant="h5" className={styles.cardTitle}>
              {title}
            </Typography>
            <TextField
              fullWidth
              label="Quiz Name"
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
              placeholder="Enter quiz name"
              required
            />
          </CardContent>
        </Card>
        {questions &&
          questions.map((question, index) => (
            <Card className={`${styles.card} ${styles.questionsCard}`}>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" className={styles.cardTitle}>
                    Question {index + 1}
                  </Typography>
                  <IconButton
                    size="small"
                    className={`${styles.deleteButton} ${globalStyles.roundActionButton}`}
                    onClick={() => handleDeleteQuestion(index)}
                    aria-label={"delete"}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <TextField
                  fullWidth
                  label="Question"
                  name="question"
                  value={question.question || ""}
                  onChange={(e) => handleEditQuestion(index, e)}
                  placeholder="Enter question"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Answer"
                  name="answer"
                  value={question.answer || ""}
                  onChange={(e) => handleEditQuestion(index, e)}
                  placeholder="Enter answer"
                  margin="normal"
                />
              </CardContent>
            </Card>
          ))}

        <Box display="flex" gap={1} className={styles.addButtons}>
          <Button
            className={styles.addQuestionButton}
            onClick={() => setQuestions([...questions, { id: Date.now() }])}
          >
            <Typography variant="button">add new question</Typography>
          </Button>
          <Button
            className={styles.addQuestionButton}
            onClick={() => setQuestions([...questions, { id: Date.now() }])}
          >
            <Typography variant="button">
              add from existing questions
            </Typography>
          </Button>
        </Box>
        <Box display="flex" gap={1} className={styles.actionButtons}>
          <Button
            className={styles.createQuizButton}
            variant="contained"
            type="submit"
          >
            Save
          </Button>
          <Button
            className={globalStyles.cancelButton}
            onClick={() => navigate("/")}
            variant="outlined"
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QuizForm;
