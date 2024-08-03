import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./InputFields.module.scss";

interface InputFieldProps {
  registerReq: UseFormRegisterReturn;
  type: string;
  placeholder?: string;
  error: FieldError | undefined;
  maxLength: number;
}

function InputField({
  type,
  placeholder,
  error,
  maxLength,
  registerReq,
}: InputFieldProps) {
  return (
    <div className={styles.inputForm}>
      <input
        type={type}
        {...registerReq}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {error && <p className={styles.errorMesage}>{error.message}</p>}
    </div>
  );
}

export default InputField;
