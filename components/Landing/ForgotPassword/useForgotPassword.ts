import { ForgotPasswordTypes } from "./types";
import { useForm } from "react-hook-form";

const useForgotPassword = (makeMessage: (text: string) => void) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordTypes>({ mode: "onChange" });

  const onSubmit = (data: ForgotPasswordTypes) => {
    console.log(data);
  };

  return { register, errors, handleSubmit, onSubmit };
};

export default useForgotPassword;
