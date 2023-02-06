import { ErrorMessage } from "@hookform/error-message";
import { NormalInput, useLandingForm } from "components";

const LandingForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useLandingForm();

  return (
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
        />
        <label
          htmlFor="remember"
          className=" font-normal text-neutral-900 text-2xl"
        >
          Remember me
        </label>
      </div>

      <button className="bg-green-600 hover:bg-green-900 transition-all text-white text-3xl w-full py-6 text-center">
        Login
      </button>
    </form>
  );
};

export default LandingForm;
