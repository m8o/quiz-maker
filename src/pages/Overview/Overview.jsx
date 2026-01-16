import styles from "./Overview.module.scss";
import globalStyles from "../../global.module.scss";
import QuizCard from "../../components/QuizCard/QuizCard";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const quizzes = [
  {
    id: 1,
    title: "Sample Quiz",
  },
  {
    id: 2,
    title: "JavaScript Basics",
  },
  {
    id: 3,
    title: "React Fundamentals",
  },
  {
    id: 4,
    title: "CSS Styling",
  },
  {
    id: 5,
    title: "HTML Essentials",
  },
  {
    id: 6,
    title: "Web APIs",
  },
  {
    id: 7,
    title: "TypeScript Advanced",
  },
  {
    id: 8,
    title: "State Management",
  },
  {
    id: 9,
    title: "Components Design",
  },
  {
    id: 10,
    title: "Performance Optimization",
  },
  {
    id: 11,
    title: "Testing in React",
  },
];

const Overview = () => {
  return (
    <div className={styles.container}>
      <IconButton className={styles.fabButton}>
        <AddIcon />
      </IconButton>
      <Paper
        className={`${globalStyles.contentPaper} ${globalStyles.overview}`}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Quiz Overview
        </Typography>
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} title={quiz.title} />
        ))}
      </Paper>
    </div>
  );
};

export default Overview;
