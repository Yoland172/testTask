/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './InputFields.module.scss';

interface InputFieldProps {
  registerReq:any
    type:string
    placeholder?:string
    error:any;
    maxLength:number;
    
}

function InputField({type,placeholder,error,maxLength,registerReq}:InputFieldProps) {
  return (
    <div className={styles.inputForm}>
      <input type={type}
      {...registerReq}
      placeholder={placeholder}
      maxLength={maxLength}
      />
      {error && <p className={styles.errorMesage}>{error.message}</p>} 
    </div>
  )
}

export default InputField
