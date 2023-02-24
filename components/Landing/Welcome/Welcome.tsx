import { Fragment } from "react";
import { WelcomeProps } from "./types";

const Welcome: React.FC<WelcomeProps> = ({ setWhichForm }) => {
  return (
    <Fragment>
      <div className="text-2xl lg:text-3xl text-white font-medium text-center mt-32">
        Welcome To AI Images <br /> <br />
        <h1 className="text-xl lg:text-2xl">
          Place where you can generate AI built images
        </h1>
      </div>

      <h1 className="text-2xl lg:text-3xl text-white font-medium text-center my-20">
        Start Building Now!
      </h1>

      <h1
        className="bg-green-600 hover:bg-green-900 transition-all text-white text-2xl w-full py-5 text-center"
        onClick={() => setWhichForm("login")}
      >
        Go To Login
      </h1>
      <h1
        className="bg-gray-600 hover:bg-gray-900 transition-all text-white text-2xl w-full py-5 text-center my-5"
        onClick={() => setWhichForm("register")}
      >
        Go To Register
      </h1>
    </Fragment>
  );
};

export default Welcome;
