const UserNavbar = () => {
  return (
    <div className="h-20  flex justify-between items-center px-8 fixed top-0 left-0 w-full shadow-md">
      <h1 className=" font-semibold text-white text-3xl">AI Images</h1>
      <button className="border-2 border-amber-550 font-medium text-xl text-amber-550 rounded-md px-3 py-2 uppercase">
        Logout
      </button>
    </div>
  );
};

export default UserNavbar;
