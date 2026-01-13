import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import routes from "./routes/routes";

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
