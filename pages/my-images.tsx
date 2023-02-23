import { SideNavbar, UserNavbar } from "components";
import Head from "next/head";
import React, { Fragment } from "react";

const MyImages = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Images / News Feed</title>
      </Head>
      <div className="bg-gray-950 min-h-screen">
        <UserNavbar isMyImages={true} />
        <SideNavbar isMyImages={true} />
      </div>
    </Fragment>
  );
};

export default MyImages;
