import { useState } from "react";
import { SuccessMessageTypes, whichForms } from "types";

const useLandingPage = () => {
  const [whichForm, setWhichForm] = useState<whichForms>("welcome");
  const [message, setMessage] = useState<SuccessMessageTypes>({
    isShowing: false,
    text: "",
  });

  const makeSuccessMessage = (text: string) => {
    setMessage({ text, isShowing: true });

    setTimeout(() => setMessage({ text: "", isShowing: false }), 5000);
  };

  return { whichForm, setWhichForm, message, setMessage, makeSuccessMessage };
};

export default useLandingPage;
