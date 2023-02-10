import { ErrorMessage } from "@hookform/error-message";
import { NormalInputProps } from "./types";
import { Fragment } from "react";

const NormalInput: React.FC<NormalInputProps> = ({
  register,
  errors,
  name,
  labelText,
  type,
  placeholder,
  message,
}) => {
  return (
    <Fragment>
      <label htmlFor={name} className="text-white text-2xl">
        {labelText}
      </label>
      <input
        type={type}
        {...register(name, {
          required: {
            value: true,
            message,
          },
        })}
        className="w-full rounded-md border-amber-550  text-white placeholder:text-gray-350 border focus:outline-none focus:ring-0 bg-transparent px-2 py-4 text-xl mt-3"
        placeholder={placeholder}
      />
      <div className="text-red-600 h-10 text-xl font-medium my-2">
        <ErrorMessage errors={errors} name={name} />
      </div>
    </Fragment>
  );
};

export default NormalInput;
