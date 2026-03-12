import type { ChangeEvent } from "react";

type Props = {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputCheckbox = ({ checked, onChange }: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        name="consent"
        id="consent"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="consent">
        Do you consent to us keeping your data for future opportunities? We'll
        definitely contact you if anything comes up — pinky promise!
      </label>
    </div>
  );
};

export { InputCheckbox };
