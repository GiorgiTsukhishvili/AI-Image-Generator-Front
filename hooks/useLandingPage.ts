import { useState } from "react";
import { whichForms } from "types";

const useLandingPage = () => {
  const [whichForm, setWhichForm] = useState<whichForms>("welcome");

  return { whichForm, setWhichForm };
};

export default useLandingPage;
