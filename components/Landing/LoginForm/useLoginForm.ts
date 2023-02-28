import { LoginFormTypes } from "./types";
import { useForm } from "react-hook-form";

const useLoginForm = (makeMessage: (text: string) => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormTypes>({ mode: "onChange" });

  const onSubmit = (data: LoginFormTypes) => {
    console.log(data);
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useLoginForm;
