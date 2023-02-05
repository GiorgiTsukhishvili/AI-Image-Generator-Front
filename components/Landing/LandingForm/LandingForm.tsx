import { ErrorMessage } from "@hookform/error-message";
import { useLandingForm } from "components";

const LandingForm = () => {
  const { register, handleSubmit, onSubmit, errors } = useLandingForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full items-start my-10 "
    >
      <label htmlFor="login" className="text-neutral-900 text-2xl">
        Username or Email
      </label>
      <input
        type="text"
        {...register("login", {
          required: {
            value: true,
            message: "Login field is required",
          },
        })}
        className="w-full rounded-md border-black text-neutral-900 placeholder:text-neutral-500 border focus:outline-none focus:ring-0 bg-transparent px-2 py-4 text-xl mt-3"
        placeholder="Input email or username"
      />
      <div className="text-red-600 h-10 text-xl font-medium my-2">
        <ErrorMessage errors={errors} name="login" />
      </div>
      <label htmlFor="password" className="text-neutral-900 text-2xl">
        Password
      </label>
      <input
        type="password"
        {...register("password", {
          required: {
            value: true,
            message: "Password field is required",
          },
        })}
        className="w-full rounded-md border-black  text-neutral-900 placeholder:text-neutral-500 border focus:outline-none focus:ring-0 bg-transparent px-2 py-4 text-xl mt-3"
        placeholder="Input password"
      />
      <div className="text-red-600 h-10 text-xl font-medium my-2">
        <ErrorMessage errors={errors} name="password" />
      </div>

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

      <button className="bg-green-600 text-white text-3xl w-full py-6 text-center">
        Login
      </button>
    </form>
  );
};

export default LandingForm;
