import { NormalInput, useLoginForm } from "components";
import { Fragment } from "react";
import { LoginFormProps } from "./types";

const LoginForm: React.FC<LoginFormProps> = ({ setWhichForm, makeMessage }) => {
  const { register, handleSubmit, onSubmit, errors } =
    useLoginForm(makeMessage);

  return (
    <Fragment>
      <h1 className="text-2xl lg:text-3xl text-white font-medium text-center mt-32">
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

        <div className="flex justify-between items-center w-full mb-5">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              {...register("remember")}
              className="rounded-[0.25rem] w-6 h-6 cursor-pointer"
              id="remember"
            />
            <label
              htmlFor="remember"
              className=" font-normal text-white text-2xl cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <h1
            className=" font-normal text-blue-600 text-2xl cursor-pointer underline"
            onClick={() => setWhichForm("forgot")}
          >
            Forgot Password?
          </h1>
        </div>

        <button className="bg-green-600 hover:bg-green-900 transition-all text-white text-2xl w-full py-5 text-center">
          Login
        </button>
        <h1
          className="bg-gray-600 hover:bg-gray-900 transition-all text-white text-2xl w-full py-5 text-center mt-5"
          onClick={() => setWhichForm("register")}
        >
          Register
        </h1>
      </form>
    </Fragment>
  );
};

export default LoginForm;
