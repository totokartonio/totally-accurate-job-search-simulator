import Button from "../ui/Button";
import styles from "./Results.module.css";

type Props = {
  onClick: () => void;
};

const Results = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <h1>Your application status update</h1>
      <div>
        <p>Thank you for taking the time to apply for this position.</p>
        <br />
        <p>
          Unfortunately we do not have good news for you.
          <br />
          We regret to inform you that we will not be moving forward with your
          application at this time. We would like to note that competition for
          jobs at our company is always strong, and that we often have to make
          difficult choices between many high-caliber candidates. We truly
          appreciate the effort you put into applying and wish you all the best
          in your job search and future endeavors.
        </p>
        <br />
        <p>
          We always add new talents to our team, so please keep an eye on our
          careers page for updates. Please contact us if you find any other
          positions that you feel would be a great fit -{" "}
          <strong className={styles.accent}>and we will do the same</strong>.
        </p>
      </div>
      <Button onClick={onClick}>Try again</Button>
    </div>
  );
};

export { Results };
