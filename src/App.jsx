import GlobalModalManager from "./components/modals/GlobalModalManager";
import Router from "./routing/Router";

const App = () => {
  return (
    <>
      <Router />
      <GlobalModalManager />
    </>
  );
};

export default App;
