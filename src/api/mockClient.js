const initialQuestions = [
  {
    id: 1,
    question: "Who was the English mathematician...?",
    answer: "Ada Lovelace",
  },
  { id: 2, question: "What is the capital of France?", answer: "Paris" },
];
const initialQuizzes = [
  {
    id: 1,
    name: "General Knowledge",
    questions: [initialQuestions[0], initialQuestions[1]],
  },
];

let questions = [...initialQuestions];
let quizzes = [...initialQuizzes];

export const mockClient = {
  getQuizzes: async () => quizzes,
  createQuiz: async (quiz) => {
    const newQuiz = { ...quiz, id: Date.now() };
    quizzes = [...quizzes, newQuiz];
    const newQuestions = quiz.questions.filter(
      (q) => !questions.find((existingQ) => existingQ.id === q.id)
    );
    questions = questions.concat(newQuestions);
    return newQuiz;
  },
  getSingleQuiz: async (id) => quizzes.find((quiz) => quiz.id === parseInt(id)),
  updateSingleQuiz: async (quiz) => {
    quizzes = quizzes.map((q) => (q.id === quiz.id ? quiz : q));
    const newQuestions = quiz.questions.filter(
      (q) => !questions.find((existingQ) => existingQ.id === q.id)
    );
    questions = questions.concat(newQuestions);
    return quiz;
  },
  deleteQuiz: async (id) => {
    quizzes = quizzes.filter((quiz) => quiz.id !== id);
    return "success";
  },
  getQuestions: async () => questions,
};
