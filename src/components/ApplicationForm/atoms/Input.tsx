import styles from "../ApplicationForm.module.css";
import { type ChangeEvent } from "react";

type Props = {
  label: string;
  type: "text" | "email" | "tel" | "number";
  id: string;
  name: string;
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

const Input = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
}: Props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>
        {label}
        {required && <sup>*</sup>}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export { Input };
