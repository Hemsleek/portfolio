import { entity, persistence } from "simpler-state";
import { ITheme } from "../utils/types";

const defaulttTheme: ITheme = "light";
const storedTheme =
  typeof window !== "undefined" && window.localStorage.getItem("app-theme");
const initState = storedTheme ? JSON.parse(storedTheme) : defaulttTheme;

export const appTheme = entity(initState, [persistence("app-theme")]);

export const toggleTheme = () =>
  appTheme.set((currentValue: ITheme) =>
    currentValue === "dark" ? "light" : "dark"
  );
