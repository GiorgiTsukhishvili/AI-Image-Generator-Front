import { NormalInput, useForgotPassword } from "components";
import { Fragment } from "react";
import { ForgotPasswordProps } from "./types";

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  setWhichForm,
  makeMessage,
}) => {
  const { register, errors, handleSubmit, onSubmit } =
    useForgotPassword(makeMessage);

  return (
    <Fragment>
      <h1 className="text-2xl lg:text-3xl text-white font-medium text-center mt-32">
        Forgot Password?
      </h1>
      <form
        className="flex flex-col w-full items-start my-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NormalInput
          type={"email"}
          placeholder={"Verification Email"}
          register={register}
          errors={errors}
          name={"email"}
          message={"Email field is required"}
          labelText={"Email"}
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-900 transition-all text-white text-2xl w-full py-5 text-center"
        >
          Send Email
        </button>
        <h1
          className="text-3xl text-white font-medium self-center mt-5 cursor-pointer"
          onClick={() => setWhichForm("login")}
        >
          Go to login
        </h1>
      </form>
    </Fragment>
  );
};

export default ForgotPassword;
