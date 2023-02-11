import { SideNavbar, UserNavbar } from "components";
import Head from "next/head";
import { Fragment } from "react";

const Profile = () => {
  return (
    <Fragment>
      <Head>
        <title>AI Images / profile</title>
      </Head>
      <div className="bg-gray-950 min-h-screen">
        <UserNavbar isProfile={true} />
        <SideNavbar isProfile={true} />
      </div>
    </Fragment>
  );
};

export default Profile;
