import { useForm } from "react-hook-form";

const useNewImageLayout = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { handleSubmit, register, onSubmit, errors };
};

export default useNewImageLayout;
