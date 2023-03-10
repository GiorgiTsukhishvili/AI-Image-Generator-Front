import { Dispatch, SetStateAction } from "react";
import { whichForms } from "types";

export type ForgotPasswordProps = {
  setWhichForm: Dispatch<SetStateAction<whichForms>>;
  makeMessage: (text: string) => void;
};

export type ForgotPasswordTypes = {
  email: string;
};
