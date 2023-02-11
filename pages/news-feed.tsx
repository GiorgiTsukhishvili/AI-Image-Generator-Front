import { SideNavbar, UserNavbar } from "components";
import Head from "next/head";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Images / News Feed</title>
      </Head>
      <div className="bg-gray-950 min-h-screen">
        <UserNavbar isNewsFeed={true} />
        <SideNavbar isNewsFeed={true} />
      </div>
    </Fragment>
  );
};

export default Home;
