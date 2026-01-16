import { lazy } from "react";
const Overview = lazy(() => import("../pages/Overview/Overview"));
const CreateQuiz = lazy(() => import("../pages/CreateQuiz/CreateQuiz"));

const routes = [
  {
    path: "/",
    element: <Overview />,
    label: "Overview",
  },
  {
    path: "/create",
    element: <CreateQuiz />,
    label: "CreateQuiz",
  },
];

export default routes;
