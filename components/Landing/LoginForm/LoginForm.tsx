import { NormalInput, useLoginForm } from "components";
import { Fragment } from "react";
import { LoginFormProps } from "./types";

const LoginForm: React.FC<LoginFormProps> = ({ setWhichForm }) => {
  const { register, handleSubmit, onSubmit, errors } = useLoginForm();

  return (
    <Fragment>
      <h1 className="text-2xl lg:text-3xl text-neutral-900 font-medium text-center mt-32">
        Welcome Back
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full items-start my-10 "
      >
        <NormalInput
          type={"text"}
          placeholder={"Input email or username"}
          register={register}
          errors={errors}
          name={"login"}
          message={"Login field is required"}
          labelText={" Username or Email"}
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

        <div className="flex gap-2 items-center mb-5">
          <input
            type="checkbox"
            {...register("remember")}
            className="rounded-[0.25rem] w-6 h-6 cursor-pointer"
            id="remember"
          />
          <label
            htmlFor="remember"
            className=" font-normal text-neutral-900 text-2xl cursor-pointer"
          >
            Remember me
          </label>
        </div>

        <button className="bg-green-600 hover:bg-green-900 transition-all text-white text-2xl w-full py-5 text-center">
          Login
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-900 transition-all text-white text-2xl w-full py-5 text-center mt-5"
          onClick={() => setWhichForm("register")}
        >
          Register
        </button>
      </form>
    </Fragment>
  );
};

export default LoginForm;
