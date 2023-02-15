import { ManStick } from "components";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

const ErrorPage = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Images</title>
      </Head>
      <div className="flex flex-col items-center justify-center bg-gray-950 w-full h-screen">
        <h1 className="text-3xl text-white flex items-center">
          <ManStick /> Page Not Found 404
        </h1>
        <Link href={"/"} className="text-3xl text-white mt-10 cursor-pointer">
          Go To Login
        </Link>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
