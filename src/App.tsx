import { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import Layout from "./components/ui/Layout";
import LoadingScreen from "./components/LoadingScreen";
import Results from "./components/Results";
import StartScreen from "./components/StartScreen";

type StateType = "start" | "form" | "loading" | "results";

function App() {
  const [state, setState] = useState<StateType>("start");

  const renderComponent = () => {
    if (state === "start")
      return <StartScreen onClick={() => setState("form")} />;
    if (state === "form")
      return <ApplicationForm onSubmit={() => setState("loading")} />;
    if (state === "loading")
      return <LoadingScreen onComplete={() => setState("results")} />;
    if (state === "results")
      return <Results onClick={() => setState("start")} />;
  };

  return (
    <>
      <h1>Totally Accurate Job Search Simulator</h1>
      <Layout>{renderComponent()}</Layout>
    </>
  );
}

export default App;
