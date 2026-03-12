import type { ChangeEvent } from "react";

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
};

const InputRadio = ({ name, values, selectedVal, onChange }: Props) => {
  return (
    <div>
      {values.map((val) => (
        <div key={val.id}>
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
    </div>
  );
};

export { InputRadio };
