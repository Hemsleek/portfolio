import { useCallback, useEffect } from "react";
import { appState, toggleTheme } from "../entity";

export const useSystemTheme = () => {
  useEffect(() => {
    const listenerCallback = (e: any) => {
      const _theme = e.matches ? "dark" : "light";
      const { theme } = appState.get();
      if (theme !== _theme) toggleTheme();
    };

    const systemPreference = window.matchMedia("(prefers-color-scheme:dark)");

    if (systemPreference !== null) {
      const currentSystemTheme = systemPreference.matches ? "dark" : "light";
      currentSystemTheme !== appState.get().theme && toggleTheme();
      systemPreference.addListener(listenerCallback);
    }
    return () => {
      systemPreference.removeListener(listenerCallback);
    };
  }, []);

  return useCallback(
    () =>
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-color-scheme:dark)").matches
          ? "dark"
          : "light"
        : null,
    []
  );
};
