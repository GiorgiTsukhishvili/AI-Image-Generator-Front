const UserNavbar = () => {
  return (
    <div className="h-20 bg-gray-300  flex justify-between items-center px-8">
      <h1 className=" font-semibold text-amber-550 text-3xl">AI Images</h1>
      <button className="border-2 border-amber-550 font-medium text-xl text-amber-550 rounded-md px-2 py-2 uppercase">
        Logout
      </button>
    </div>
  );
};

export default UserNavbar;
