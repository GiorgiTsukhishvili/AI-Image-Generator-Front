import { useEffect, useRef, useState } from "react";

const useUserNavbar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const closeDropdown = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsNavigationOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", (e) => closeDropdown(e));

    return () =>
      window.removeEventListener("mousedown", (e) => closeDropdown(e));
  }, [isNavigationOpen]);

  return { isNavigationOpen, setIsNavigationOpen, ref };
};

export default useUserNavbar;
