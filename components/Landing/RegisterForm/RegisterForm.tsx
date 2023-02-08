import { NormalInput, useRegisterForm } from "components";
import { Fragment } from "react";
import { RegisterFormProps } from "./types";

const RegisterForm: React.FC<RegisterFormProps> = ({ setWhichForm }) => {
  const { register, errors, handleSubmit, onSubmit } = useRegisterForm();

  return (
    <Fragment>
      <h1 className="text-2xl lg:text-3xl text-neutral-900 font-medium text-center mt-32">
        Welcome New User
      </h1>
      <form
        className="flex flex-col w-full items-start my-10 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <NormalInput
          type={"text"}
          placeholder={"Input username"}
          register={register}
          errors={errors}
          name={"username"}
          message={"Username field is required"}
          labelText={"Username"}
        />

        <NormalInput
          type={"email"}
          placeholder={"Input email"}
          register={register}
          errors={errors}
          name={"email"}
          message={"Email field is required"}
          labelText={"Email"}
        />

        <NormalInput
          type={"password"}
          placeholder={"Input password"}
          register={register}
          errors={errors}
          name={"password"}
          message={"Password field is required"}
          labelText={"Password"}
        />

        <NormalInput
          type={"password"}
          placeholder={"Input password confirmation"}
          register={register}
          errors={errors}
          name={"password_confirmation"}
          message={"Password confirmation field is required"}
          labelText={"Password Confirmation"}
        />

        <h1
          className="bg-green-600 hover:bg-green-900 transition-all text-white text-2xl w-full py-5 text-center"
          onClick={() => setWhichForm("login")}
        >
          Login
        </h1>
        <button className="bg-gray-600 hover:bg-gray-900 transition-all text-white text-2xl w-full py-5 text-center mt-5">
          Register
        </button>
      </form>
    </Fragment>
  );
};

export default RegisterForm;
