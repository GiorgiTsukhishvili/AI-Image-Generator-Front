import { LayoutTypes } from "./types";
import { useForm } from "react-hook-form";
import { randomText } from "utils";

const useNewImageLayout = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<LayoutTypes>({ mode: "onChange" });

  const onSubmit = async (data: LayoutTypes) => {
    console.log(data);
  };

  const randomGenerated = () => {
    const random = randomText[Math.floor(Math.random() * randomText.length)];
    setValue("new_image", random);
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    errors,
    randomGenerated,
  };
};

export default useNewImageLayout;
