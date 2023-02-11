import { SideNavbarProps } from "./types";
import Link from "next/link";
import { Avatar, House } from "components";

const SideNavbar: React.FC<SideNavbarProps> = ({ isNewsFeed, isProfile }) => {
  return (
    <div className="fixed left-0 top-20 px-10 pt-20 flex flex-col gap-5">
      <Link
        href={"/profile"}
        className={`text-2xl ${
          isProfile ? "text-red-600" : "text-white "
        } text-medium flex items-center gap-3`}
      >
        <Avatar isProfile={isProfile} /> My Profile
      </Link>
      <Link
        href={"/news-feed"}
        className={`text-2xl ${
          isNewsFeed ? "text-red-600" : "text-white "
        } text-medium flex items-center gap-3`}
      >
        <House isNewsFeed={isNewsFeed} /> News Feed
      </Link>
    </div>
  );
};

export default SideNavbar;
