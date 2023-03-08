import { useForm } from "react-hook-form";
import { randomText } from "utils";

const useNewImageLayout = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const randomGenerated = () => {
    const random = randomText[Math.floor(Math.random() * randomText.length)];
    setValue("new-image", random);
  };

  const generateImage = () => {};

  return {
    handleSubmit,
    register,
    onSubmit,
    errors,
    randomGenerated,
    generateImage,
  };
};

export default useNewImageLayout;
