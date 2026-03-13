import type { ChangeEvent, RefObject } from "react";
import styles from "../ApplicationForm.module.css";
import Button from "../../ui/Button";
import TrashIcon from "../../../assets/trash.svg?react";

type Props = {
  ref: RefObject<HTMLInputElement | null>;
  onChange: (file: File | null) => void;
  uploadedFile: File | null;
};

const InputCV = ({ ref, onChange, uploadedFile }: Props) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files?.[0] ?? null);
  };

  const handleDelete = () => {
    onChange(null);
    if (ref.current) ref.current.value = "";
  };

  return (
    <div className={styles.input}>
      <label htmlFor="cv" className={styles.label}>
        CV<sup className={styles.required}>*</sup>
      </label>
      <input
        accept="application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/vnd.oasis.opendocument.text,.odt,application/rtf,.rtf,image/*,video/*,audio/*"
        type="file"
        tabIndex={-1}
        name="cv"
        id="cv"
        multiple={false}
        className={styles.fileInput}
        ref={ref}
        onChange={handleFileChange}
      />
      {uploadedFile ? (
        <div className={styles.cvUploaded}>
          <span className={styles.cvFileName}>{uploadedFile.name}</span>
          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={handleDelete}
              className={styles.deleteButton}
            >
              <TrashIcon />
            </button>
            <Button type="button" onClick={() => ref.current?.click()}>
              Replace
            </Button>
          </div>
        </div>
      ) : (
        <Button type="button" onClick={() => ref.current?.click()}>
          Upload File
        </Button>
      )}
    </div>
  );
};

export { InputCV };
