import { Dispatch, SetStateAction } from "react";
import { whichForms } from "types";

export type RegisterFormProps = {
  setWhichForm: Dispatch<SetStateAction<whichForms>>;
  makeMessage: (text: string) => void;
};

export type RegisterFormTypes = {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
};
