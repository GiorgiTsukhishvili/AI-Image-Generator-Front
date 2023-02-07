import { useForm } from "react-hook-form";

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { register, handleSubmit, onSubmit, errors };
};

export default useLoginForm;
