import { Dispatch, SetStateAction } from "react";
import { whichForms } from "types";

export type RegisterFormProps = {
  setWhichForm: Dispatch<SetStateAction<whichForms>>;
};
