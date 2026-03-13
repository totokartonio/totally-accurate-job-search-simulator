import { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import ContentCard from "./components/ui/ContentCard";
import LoadingScreen from "./components/LoadingScreen";
import Results from "./components/Results";
import StartScreen from "./components/StartScreen";
import Layout from "./components/ui/Layout";

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
    <Layout>
      <ContentCard>{renderComponent()}</ContentCard>
    </Layout>
  );
}

export default App;
