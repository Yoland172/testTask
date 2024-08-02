import { useForm } from "react-hook-form";
import styles from "./CreateContact.module.scss";
import { CreateContactInputs } from "../../../lib/types/types";
import { useEffect } from "react";
import InputField from "../../ui/InputField/InputField";
import Loader from "../../ui/loader/Loader";

interface CreateContactProps {
  addContact: (userInfo:CreateContactInputs) => void;
  isLoading?:boolean
}


const CreateContact = ({addContact,isLoading}:CreateContactProps) => {

  useEffect(() => {
    console.log(isLoading)
  },[isLoading])

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<CreateContactInputs>({});

  const onSubmit = (data: CreateContactInputs) => {
    if (!data.firstName && !data.lastName) {
      setError("firstName", {
        type: "manual",
        message: "One name field is required",
      });
      setError("lastName", {
        type: "manual",
        message: "One name field is required",
      });
    } else {
      clearErrors("firstName");
      clearErrors("lastName");
      addContact(data);
      setValue("firstName", '', { shouldValidate: false });
      setValue("lastName", '', { shouldValidate: false });
      setValue("email", '', { shouldValidate: false });
    }   

  };

  return (
    <form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
      <h2>Create Contact</h2>

      <div className={styles.inputFiledContainer}>
        <h3>First Name</h3>
        <InputField
          registerReq={register("firstName")}
          type="text"
          error={errors.firstName}
          maxLength={100}
          placeholder="Some..."
        />
      </div>
      <div className={styles.inputFiledContainer}>
        <h3>Last Name</h3>
        <InputField
          registerReq={register("lastName")}
          type="text"
          error={errors.lastName}
          maxLength={100}
          placeholder="Some..."
        />
      </div>
      <div className={styles.inputFiledContainer}>
        <h3>Email</h3>
        <InputField
          registerReq={register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          type="text"
          error={errors.email}
          maxLength={100}
          placeholder="Some..."
        />
      </div>

      <button className={styles.submitButton} disabled={isLoading}>{isLoading ? <Loader/> : "Add Contact"}</button>
    </form>
  );
};

export default CreateContact;
