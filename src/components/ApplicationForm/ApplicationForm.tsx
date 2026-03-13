import {
  useState,
  useRef,
  type ChangeEventHandler,
  type SubmitEventHandler,
} from "react";
import { Input } from "./atoms/Input";
import { InputRadio } from "./atoms/InputRadio";
import { InputCV } from "./atoms/InputCV";
import { Autofill } from "./atoms/Autofill";
import styles from "./ApplicationForm.module.css";
import { PRONOUNCES } from "../../data/pronounces";
import { InputCheckbox } from "./atoms/InputCheckbox";

type Props = {
  onSubmit: () => void;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  cv: File | null;
  phone: string;
  pronoun: "she" | "he" | "they" | "other" | null;
  salary: number | undefined;
  consent: boolean;
};

const initFormData = {
  firstName: "",
  lastName: "",
  email: "",
  cv: null,
  phone: "",
  pronoun: null,
  salary: undefined,
  consent: false,
};

const ApplicationForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<FormData>(initFormData);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit: SubmitEventHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAutofillFileSelect = (file: File | null) => {
    if (!file) return;
    setIsLoading(true);
    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        cv: file,
        firstName: "Hsk$kla8%",
        lastName: "Smith",
        email: "ljialiw@ILJA$3as.com",
      }));
      setIsLoading(false);
    }, 2000);
  };

  const isUploaded = !!formData.cv;

  return (
    <div>
      <Autofill
        isUploaded={isUploaded}
        isLoading={isLoading}
        onFileSelect={handleAutofillFileSelect}
      />
      <section>
        {isLoading && (
          <div className={styles.spinnerOverlay}>
            <div className={styles.spinner} />
          </div>
        )}
        <h2>Application Details</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="First Name"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Smith"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="johnsmith@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <InputCV
            ref={ref}
            uploadedFile={formData.cv}
            onChange={(file) => setFormData({ ...formData, cv: file })}
          />
          <Input
            label="Phone"
            type="tel"
            name="phone"
            id="phone"
            placeholder="1-123-444-5678"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputRadio
            values={PRONOUNCES}
            name="pronoun"
            selectedVal={formData.pronoun}
            onChange={handleChange}
          />
          <Input
            label="What are your salary expectations for this role (gross annual
              salary in EUR)?"
            type="number"
            name="salary"
            id="salary"
            value={formData.salary}
            onChange={handleChange}
          />
          <InputCheckbox
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ ...formData, consent: e.target.checked })
            }
          />
          <button type="submit">Submit Application</button>
        </form>
      </section>
    </div>
  );
};

export { ApplicationForm };
