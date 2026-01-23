import { lazy } from "react";
import EditQuiz from "../pages/EditQuiz/EditQuiz";
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
  {
    path: "/edit/:id",
    element: <EditQuiz />,
    label: "EditQuiz",
  },
];

export default routes;
