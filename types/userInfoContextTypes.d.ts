import { Dispatch } from "react";

export type UserInfoContextTypes = {
  userInfo: any;
  setUserInfo: Dispatch<SetStateAction<any>>;
};
