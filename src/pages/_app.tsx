import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";

import type { AppProps } from "next/app";
import { appState } from "../entity";
import { useSystemTheme } from "../utils/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = appState.use();
  useSystemTheme();

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
