import { useState } from "react";

const useUserNavbar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  return { isNavigationOpen, setIsNavigationOpen };
};

export default useUserNavbar;
