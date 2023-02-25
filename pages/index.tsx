import {
  ForgotPassword,
  LandingImages,
  LoginForm,
  RegisterForm,
  SuccessMessage,
  Welcome,
} from "components";
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
      <div className="flex justify-between items-start pt-10 px-20 pb-20 bg-gray-950 flex-col-reverse lg:flex-row">
        <LandingImages />
        <div className="max-w-[40rem] w-full  lg:pl-20 flex items-center flex-col">
          <h1 className="text-3xl  lg:text-4xl text-white font-medium text-center">
            AI With Your Vision
          </h1>

          {whichForm === "login" ? (
            <LoginForm setWhichForm={setWhichForm} />
          ) : whichForm === "register" ? (
            <RegisterForm setWhichForm={setWhichForm} />
          ) : whichForm === "forgot" ? (
            <ForgotPassword setWhichForm={setWhichForm} />
          ) : whichForm === "welcome" ? (
            <Welcome setWhichForm={setWhichForm} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <SuccessMessage />
    </Fragment>
  );
};

export default Home;
