import { Avatar, Burger, House, useUserNavbar } from "components";
import { UserNavbarProps } from "./types";
import Link from "next/link";
import { Fragment } from "react";

const UserNavbar: React.FC<UserNavbarProps> = ({ isProfile, isNewsFeed }) => {
  const { isNavigationOpen, setIsNavigationOpen, ref } = useUserNavbar();

  return (
    <Fragment>
      <div className="h-20  flex justify-between items-center px-8 fixed top-0 left-0 w-full shadow-md">
        <div
          className="inline lg:hidden cursor-pointer"
          onClick={() => setIsNavigationOpen(true)}
        >
          <Burger />
        </div>
        <h1 className=" font-semibold text-white text-3xl hidden lg:inline">
          AI Images
        </h1>
        <button className="border-2 border-amber-550 font-medium text-xl text-amber-550 rounded-md px-3 py-2 uppercase">
          Logout
        </button>
      </div>
      {isNavigationOpen ? (
        <div
          ref={ref}
          className="h-[calc(100vh_-_80px)] bg-black w-[20rem] lg:hidden top-20 fixed left-0 rounded-md flex flex-col justify-start gap-5 pt-10 pl-10"
        >
          <Link
            href={"/profile"}
            className={`text-xl ${
              isProfile ? "text-red-600" : "text-white "
            } text-medium flex items-center gap-3`}
          >
            <Avatar isProfile={isProfile} isSidebar={true} /> My Profile
          </Link>
          <Link
            href={"/news-feed"}
            className={`text-xl ${
              isNewsFeed ? "text-red-600" : "text-white "
            } text-medium flex items-center gap-3`}
          >
            <House isNewsFeed={isNewsFeed} isSidebar={true} /> News Feed
          </Link>
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default UserNavbar;
