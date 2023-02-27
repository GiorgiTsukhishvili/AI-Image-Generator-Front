import { Close } from "components";
import { SuccessMessageProps } from "./types";

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  text,
  setMessage,
}) => {
  return (
    <div className="absolute top-10 right-20 bg-green-600 w-[300px] h-16 rounded text-2xl text-white flex items-center justify-between px-4">
      {text}
      <span
        className="cursor-pointer"
        onClick={() =>
          setMessage((prevState) => ({ ...prevState, isShowing: false }))
        }
      >
        <Close />
      </span>
    </div>
  );
};

export default SuccessMessage;
