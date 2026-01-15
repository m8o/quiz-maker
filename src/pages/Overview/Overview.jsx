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
		<div style={{ position: "relative", minHeight: "100vh" }}>
			<IconButton
				sx={{
					position: "fixed",
					bottom: "50px",
					right: "50px",
					backgroundColor: "primary.main",
					color: "white",
					boxShadow: 3,
					"&:hover": {
						backgroundColor: "primary.dark",
					},
				}}
			>
				<AddIcon />
			</IconButton>
			<Paper
				style={{
					margin: "50px",
					padding: "25px",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					gap: "12px",
				}}
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
