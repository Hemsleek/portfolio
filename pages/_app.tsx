import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";

import type { AppProps } from "next/app";
import { appTheme } from "../entity";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = appTheme.use();

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      return;
    }
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <Component {...pageProps} />;
}

export default MyApp;
