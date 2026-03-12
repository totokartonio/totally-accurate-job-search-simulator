import styles from "../ApplicationForm.module.css";
import type { ChangeEvent } from "react";
import { useRef } from "react";

type Props = {
  isUploaded: boolean;
  isLoading: boolean;
  onFileSelect: (file: File | null) => void;
};

const Autofill = ({ isUploaded, isLoading, onFileSelect }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <section className={styles.autofill}>
      <input
        type="file"
        className={styles.fileInput}
        ref={ref}
        tabIndex={-1}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onFileSelect(e.target.files?.[0] ?? null)
        }
      />
      <div>
        <div>Autofill from resume</div>
        <div>Upload your resume here to autofill key application fields.</div>
        {isUploaded && (
          <div>
            <div>Autofill completed!</div>
            <div>Please review the information we filled in for you.</div>
          </div>
        )}
      </div>
      <button type="button" onClick={() => ref.current?.click()}>
        {isLoading ? "Processing..." : "Upload File"}
      </button>
    </section>
  );
};

export { Autofill };
