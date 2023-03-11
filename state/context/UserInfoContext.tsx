import { createContext, ReactNode, useContext, useState } from "react";
import { UserInfoContextTypes } from "types";

const UserInfoContext = createContext({} as UserInfoContextTypes);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState();

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfoContext = () => useContext(UserInfoContext);
