import { Dispatch, SetStateAction } from "react";
import { whichForms } from "types";

export type WelcomeProps = {
  setWhichForm: Dispatch<SetStateAction<whichForms>>;
};
