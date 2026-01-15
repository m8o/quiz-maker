import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import routes from "./routes";
const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default Router;
