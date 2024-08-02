import { useForm } from "react-hook-form";
import InputField from "../../../ui/InputField/InputField";
import styles from "./CreateContact.module.scss";
import { CreateContactInputs } from "../../../lib/types/types";

interface CreateContactProps {
  addContact: (userInfo:CreateContactInputs) => void
}


const CreateContact = ({addContact}:CreateContactProps) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
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

      <button className={styles.submitButton}>Add Contact</button>
    </form>
  );
};

export default CreateContact;
