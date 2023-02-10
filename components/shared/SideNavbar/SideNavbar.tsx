import Link from "next/link";

const SideNavbar = () => {
  return (
    <div className="fixed left-0 top-20 px-10 pt-20">
      <Link href={"/news-feed"} className="text-2xl text-white">
        News Feed
      </Link>
    </div>
  );
};

export default SideNavbar;
