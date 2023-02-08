import { UserNavbar } from "components";
import Head from "next/head";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Images / Home</title>
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <UserNavbar />
      </div>
    </Fragment>
  );
};

export default Home;
