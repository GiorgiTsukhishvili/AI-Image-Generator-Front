import { Dispatch, SetStateAction } from "react";
import { whichForms } from "types";

export type LoginFormProps = {
  setWhichForm: Dispatch<SetStateAction<whichForms>>;
  makeMessage: (text: string) => void;
};

export type LoginFormTypes = {
  login: string;
  password: string;
  remember: boolean;
};
