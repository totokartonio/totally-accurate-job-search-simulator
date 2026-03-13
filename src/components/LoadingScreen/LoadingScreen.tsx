import { useState, useEffect } from "react";
import styles from "./LoadingScreen.module.css";
import { LOADING_QUOTES } from "../../data/loadingQuotes";
import ProgressBar from "../ui/ProgressBar";

type Props = {
  onComplete: () => void;
};

const getRandomIndex = (arr: string[], currentIndex: number) => {
  let next = currentIndex;
  while (next === currentIndex) {
    next = Math.floor(Math.random() * arr.length);
  }
  return next;
};

const LoadingScreen = ({ onComplete }: Props) => {
  const [state, setState] = useState<"loading" | "complete">("loading");
  const [value, setValue] = useState<number>(0);
  const [quoteIndex, setQuoteIndex] = useState<number>(0);

  useEffect(() => {
    if (value >= 100) {
      setState("complete");
      return;
    }

    const timerId = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 150);

    return () => clearInterval(timerId);
  }, [value]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setQuoteIndex((prev) => getRandomIndex(LOADING_QUOTES, prev));
    }, 3500);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className={styles.container}>
      {state === "loading" ? (
        <>
          <h2>Analyzing your application</h2>
          <ProgressBar
            label="Your application is being observed"
            value={value}
            id="application"
          />
          <div>{LOADING_QUOTES[quoteIndex]}</div>{" "}
        </>
      ) : (
        <>
          <h2>Analysis complete</h2>
          <button onClick={onComplete}>See the results</button>
        </>
      )}
    </div>
  );
};

export { LoadingScreen };
