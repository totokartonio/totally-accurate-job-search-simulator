import { useState } from "react";
import ApplicationForm from "./components/ApplicationForm";
import Layout from "./components/ui/Layout";
import LoadingScreen from "./components/LoadingScreen";

type StateType = "idle" | "filling" | "uploading" | "finished";

function App() {
  const [state, setState] = useState<StateType>("filling");

  const renderComponent = () => {
    if (state === "filling")
      return <ApplicationForm onSubmit={() => setState("uploading")} />;
    if (state === "uploading")
      return <LoadingScreen onComplete={() => setState("filling")} />;
  };

  return (
    <>
      <h1>Totally Accurate Job Search Simulator</h1>
      <Layout>{renderComponent()}</Layout>
    </>
  );
}

export default App;
