import { RegisterFormTypes } from "./types";
import { useForm } from "react-hook-form";

const useRegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<RegisterFormTypes>({ mode: "onChange" });

  const onSubmit = (data: RegisterFormTypes) => {
    if (getValues().password !== getValues().password_confirmation) {
      setError("password", {
        type: "custom",
        message: "Passwords do not match",
      });
      setError("password_confirmation", {
        type: "custom",
        message: "Passwords do not match",
      });
    }

    console.log(data);
  };

  return { register, errors, handleSubmit, onSubmit };
};

export default useRegisterForm;
