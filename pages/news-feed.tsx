import { SideNavbar, UserNavbar } from "components";
import Head from "next/head";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Images / Home</title>
      </Head>
      <div className="bg-gray-950 min-h-screen">
        <UserNavbar />
        <SideNavbar />
      </div>
    </Fragment>
  );
};

export default Home;
