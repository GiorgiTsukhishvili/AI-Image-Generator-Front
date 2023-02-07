import { Fragment } from "react";
import { RegisterFormProps } from "./types";

const RegisterForm: React.FC<RegisterFormProps> = ({ setWhichForm }) => {
  return (
    <Fragment>
      <h1 className="text-2xl lg:text-3xl text-neutral-900 font-medium text-center mt-32">
        Registration Form
      </h1>
    </Fragment>
  );
};

export default RegisterForm;
