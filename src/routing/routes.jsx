import { lazy } from "react";
const Overview = lazy(() => import("../pages/Overview/Overview"));
const CreateQuiz = lazy(() => import("../pages/CreateQuiz/CreateQuiz"));
const EditQuiz = lazy(() => import("../pages/EditQuiz/EditQuiz"));

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
  {
    path: "/edit/:id",
    element: <EditQuiz />,
    label: "EditQuiz",
  },
];

export default routes;
