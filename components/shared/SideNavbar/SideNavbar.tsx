import { SideNavbarProps } from "./types";
import Link from "next/link";
import { Avatar, Gallery, House, Plus } from "components";

const SideNavbar: React.FC<SideNavbarProps> = ({
  isNewsFeed,
  isProfile,
  isNewImage,
  isMyImages,
}) => {
  return (
    <div className="fixed left-0 top-20 px-10 pt-20  flex-col gap-5 hidden lg:flex">
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

      <Link
        href={"/my-images"}
        className={`text-xl ${
          isMyImages ? "text-red-600" : "text-white "
        } text-medium flex items-center gap-3`}
      >
        <Gallery isMyImages={isMyImages} /> My Images
      </Link>

      <Link
        href={"/new-image"}
        className={`text-xl ${
          isNewImage ? "text-red-600" : "text-white "
        } text-medium flex items-center gap-3`}
      >
        <Plus isNewImage={isNewImage} /> New Image
      </Link>
    </div>
  );
};

export default SideNavbar;
