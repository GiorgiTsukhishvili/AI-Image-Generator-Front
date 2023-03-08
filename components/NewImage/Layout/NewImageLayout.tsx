import { ErrorMessage } from "@hookform/error-message";
import { useNewImageLayout } from "components";

const NewImageLayout = () => {
  const {
    register,
    onSubmit,
    handleSubmit,
    errors,
    randomGenerated,
    generateImage,
  } = useNewImageLayout();

  return (
    <div className="lg:pl-[20rem] pt-40 px-10">
      <h1 className=" text-white uppercase lg:text-3xl text-2xl font-semibold">
        Image what to create
      </h1>
      <h1 className="text-white lg:text-2xl text-xl font-medium pt-8">
        Create amazing images and share it with community
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-10 max-w-[42rem]"
      >
        <div className="flex justify-start items-center gap-16">
          <label
            htmlFor="new-image"
            className="text-xl text-white lg:text-2xl font-normal"
          >
            New Image
          </label>
          <h1
            className="text-xl text-black lg:text-2xl font-normal bg-gray-350 rounded px-2 py-1 cursor-pointer"
            onClick={randomGenerated}
          >
            Random Text
          </h1>
        </div>
        <input
          type="text"
          {...register("new-image", {
            required: {
              value: true,
              message: "You have to input text to generate image",
            },
          })}
          className="mt-4 border-gray-350 text-white placeholder:text-gray-350 bg-transparent border-2 px-4 py-2 text-xl rounded focus:ring-0 focus:outline-0"
          placeholder="Enter new text"
        />
        <div className="text-red-600 text-xl h-8 mt-4">
          <ErrorMessage errors={errors} name="new-image" />
        </div>
        <button className="bg-green-600 hover:bg-green-900 transition-all text-white text-xl w-full py-2 text-center max-w-[15rem] rounded mt-10">
          Generate
        </button>
      </form>
    </div>
  );
};

export default NewImageLayout;
