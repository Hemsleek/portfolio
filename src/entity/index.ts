import { entity, persistence } from "simpler-state";
import { IINITSTATE } from "../utils/types";

const defaultTheme: IINITSTATE = {
  theme: "light",
  showMenu: false,
};

const storedTheme =
  typeof window !== "undefined" && window.localStorage.getItem("hemsleek-init");
const initState = storedTheme ? JSON.parse(storedTheme) : defaultTheme;

export const appState = entity(initState, [persistence("hemsleek-init")]);

export const toggleTheme = () =>
  appState.set((currentValue: IINITSTATE) => ({
    ...currentValue,
    theme: currentValue.theme === "dark" ? "light" : "dark",
  }));

export const toggleMenu = () =>
  appState.set((currentValue: IINITSTATE) => ({
    ...currentValue,
    showMenu: !currentValue.showMenu,
  }));
