import { Close } from "components";

const SuccessMessage = () => {
  return (
    <div className="absolute top-10 right-20 bg-green-600 w-[300px] h-16 rounded text-2xl text-white flex items-center justify-between px-4">
      SuccessMessage
      <span className="cursor-pointer">
        <Close />
      </span>
    </div>
  );
};

export default SuccessMessage;
