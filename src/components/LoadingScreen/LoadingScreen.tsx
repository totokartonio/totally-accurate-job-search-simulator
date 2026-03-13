import { useState, useEffect } from "react";
import styles from "./LoadingScreen.module.css";
import { LOADING_QUOTES } from "../../data/loadingQuotes";
import ProgressBar from "../ui/ProgressBar";
import Button from "../ui/Button";

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
    const timerId = setInterval(() => {
      setValue((prev) => {
        if (prev >= 99) {
          clearInterval(timerId);
          setState("complete");
          return 100;
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(timerId);
  }, []);

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
          <h1>Analyzing your application</h1>
          <ProgressBar
            label="Your application is being observed"
            value={value}
            id="application"
          />
          <div key={quoteIndex} className={styles.quote}>
            {LOADING_QUOTES[quoteIndex]}
          </div>{" "}
        </>
      ) : (
        <>
          <h1>Analysis complete</h1>
          <div>
            <p>
              Thank you for your patience.
              <br />
              Your application has been thoroughly reviewed by our team.
            </p>
          </div>
          <Button onClick={onComplete}>View your application status</Button>
        </>
      )}
    </div>
  );
};

export { LoadingScreen };
