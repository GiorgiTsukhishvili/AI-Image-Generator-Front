import { LandingImages, LoginForm, RegisterForm } from "components";
import { useLandingPage } from "hooks";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const Home: NextPage = () => {
  const { whichForm, setWhichForm } = useLandingPage();

  return (
    <Fragment>
      <Head>
        <title>AI Images</title>
      </Head>
      <div className="flex justify-between pt-10 px-20 pb-20 bg-gray-200 flex-col-reverse sm:flex-row">
        <LandingImages />
        <div className="min-w-[20rem] lg:min-w-[40rem] sm:pl-20 flex items-center flex-col">
          <h1 className="text-3xl  lg:text-4xl text-neutral-900 font-medium text-center">
            AI With Your Vision
          </h1>

          {whichForm === "login" ? (
            <LoginForm setWhichForm={setWhichForm} />
          ) : whichForm === "register" ? (
            <RegisterForm setWhichForm={setWhichForm} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
