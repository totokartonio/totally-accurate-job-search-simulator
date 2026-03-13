import type { ChangeEvent } from "react";
import styles from "../ApplicationForm.module.css";

type Props = {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputCheckbox = ({ checked, onChange }: Props) => {
  return (
    <div className={styles.checkboxContainer}>
      <p>
        Do you consent to us keeping your data for future opportunities? We'll
        definitely contact you if anything comes up — pinky promise!
      </p>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          name="consent"
          id="consent"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor="consent">I agree</label>
      </div>
    </div>
  );
};

export { InputCheckbox };
