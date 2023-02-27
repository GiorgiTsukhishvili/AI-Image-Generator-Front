import { Dispatch, SetStateAction } from "react";
import { SuccessMessageTypes } from "types";

export type SuccessMessageProps = {
  setMessage: Dispatch<SetStateAction<SuccessMessageTypes>>;
  text: string;
};
