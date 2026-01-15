import { lazy } from "react";

const Overview = lazy(() => import("../pages/Overview/Overview"));

const routes = [
  {
    path: "/",
    element: <Overview />,
    label: "Overview",
  },
];

export default routes;
