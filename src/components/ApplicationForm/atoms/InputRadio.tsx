import type { ChangeEvent } from "react";
import styles from "../ApplicationForm.module.css";

type RadioValues = {
  id: string;
  label: string;
  value: string;
};

type Props = {
  values: RadioValues[];
  name: string;
  selectedVal: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  required?: boolean;
};

const InputRadio = ({
  name,
  values,
  selectedVal,
  onChange,
  label,
  id,
  required = false,
}: Props) => {
  return (
    <fieldset id={id} className={styles.fieldset}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <sup className={styles.required}>*</sup>}
      </label>
      {values.map((val) => (
        <div key={val.id} className={styles.radioInput}>
          <input
            type="radio"
            name={name}
            id={val.id}
            value={val.value}
            checked={val.value === selectedVal}
            onChange={onChange}
          />
          <label htmlFor={val.id}>{val.label}</label>
        </div>
      ))}
    </fieldset>
  );
};

export { InputRadio };
