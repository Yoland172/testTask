/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './InputFields.module.scss';

interface InputFieldProps {
    type:string
    placeholder?:string
    error:any;
    maxLength:number;
    
}

function InputField({type,placeholder,error,maxLength}:InputFieldProps) {
  return (
    <div className={styles.inputForm}>
      <input type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      />
      {error && <p className={styles.errorMesage}>{error.mesage}</p>} 
    </div>
  )
}

export default InputField
