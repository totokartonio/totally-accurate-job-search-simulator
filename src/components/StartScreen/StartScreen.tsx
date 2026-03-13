import Button from "../ui/Button";
import styles from "./StartScreen.module.css";

type Props = {
  onClick: () => void;
};

const StartScreen = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <h1>Prepare for your next big opportunity</h1>
      <div className={styles.text}>
        <p>The job market today can feel overwhelming.</p>
        <p>
          Get ready for your next interview with this{" "}
          <span className={styles.accentText}>
            totally accurate job search simulator!
          </span>
        </p>

        <p>Just fill out this simple form and prepare for the next step.</p>
      </div>
      <Button onClick={onClick}>Let's go!</Button>
    </div>
  );
};

export { StartScreen };
