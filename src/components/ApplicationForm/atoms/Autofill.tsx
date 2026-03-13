import styles from "../ApplicationForm.module.css";
import type { ChangeEvent } from "react";
import { useRef } from "react";
import Button from "../../ui/Button";

type Props = {
  isUploaded: boolean;
  isLoading: boolean;
  onFileSelect: (file: File | null) => void;
};

const Autofill = ({ isUploaded, isLoading, onFileSelect }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <section className={styles.autofillContainer}>
      <input
        type="file"
        className={styles.fileInput}
        ref={ref}
        tabIndex={-1}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onFileSelect(e.target.files?.[0] ?? null)
        }
      />
      <div className={styles.autofillContent}>
        <div className={styles.autofillMain}>
          <div>
            <h2 className={styles.autofillTitle}>Autofill from resume</h2>
            <p className={styles.autofillSubtitle}>
              Upload your resume here to autofill key application fields.
            </p>
          </div>
          <Button
            type="button"
            onClick={() => ref.current?.click()}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Upload File"}
          </Button>
        </div>
        {isUploaded && (
          <div className={styles.success}>
            <h2>Autofill completed!</h2>
            <div>Please review the information we filled in for you.</div>
          </div>
        )}
      </div>
    </section>
  );
};

export { Autofill };
