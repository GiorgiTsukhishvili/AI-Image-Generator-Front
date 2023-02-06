import { Dispatch, SetStateAction } from "react";
import { whichForms } from "types";

export type LandingFormProps = {
  setWhichForm: Dispatch<SetStateAction<whichForms>>;
};
