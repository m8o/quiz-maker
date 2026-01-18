const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const client = {
  getQuizzes: async () => {
    const response = await fetch(`${BASE_URL}/quizzes`);
    return response.json();
  },
  createQuiz: async (quiz) => {},
  getSingleQuiz: async (id) => {},
  updateSingleQuiz: async (quiz) => {},
  deleteQuiz: async (id) => {},
  getQuestions: async () => {},
};
