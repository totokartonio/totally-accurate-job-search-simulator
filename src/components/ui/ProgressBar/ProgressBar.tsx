import styles from "./ProgressBar.module.css";

type Props = {
  value: number;
  label: string;
  id: string;
};

const ProgressBar = ({ value, label, id }: Props) => {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <progress id={id} max="100" value={value} className={styles.progress}>
        {value}
      </progress>
    </div>
  );
};

export { ProgressBar };
