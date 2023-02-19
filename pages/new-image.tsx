import { SideNavbar, UserNavbar } from "components";
import Head from "next/head";
import { Fragment } from "react";

const NewImage = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Images / New Image</title>
      </Head>
      <div className="bg-gray-950 min-h-screen">
        <UserNavbar isNewImage={true} />
        <SideNavbar isNewImage={true} />
      </div>
    </Fragment>
  );
};

export default NewImage;
