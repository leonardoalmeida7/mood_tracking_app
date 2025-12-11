import { IoIosInformationCircle } from "react-icons/io";

import styles from "./styles.module.css";

type FormGroupProps = {
  labelText: string;
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
} & React.ComponentProps<"input">;
export const FormGroup = ({
  labelText,
  type,
  id,
  name,
  placeholder,
  errorMessage,
  className,
  ...inputProps
}: FormGroupProps) => {
  return (
    <div className={`${styles.formGroup} d-flex flex-column gap-1 ${errorMessage ? styles.hasError : ""}`}>
      <label htmlFor={id} className={className}>{labelText}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...inputProps}
      />
      {errorMessage && (
        <span className={`${styles.errorMessage} d-flex align-items-center gap-1`}><IoIosInformationCircle /> {errorMessage}</span>
      )}
    </div>
  );
};
