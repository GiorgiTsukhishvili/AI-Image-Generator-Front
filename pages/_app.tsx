import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserInfoProvider } from "state";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserInfoProvider>
      <Component {...pageProps} />
    </UserInfoProvider>
  );
}

export default MyApp;
