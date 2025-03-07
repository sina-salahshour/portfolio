import { createGlobalVar, createTheme } from "@vanilla-extract/css";

export const soraFontVar = createGlobalVar("font-sora");

export const [themeClassName, theme] = createTheme({
  color: {
    primary: {
      black: "#000000",
      neutral: "#404040",
      white: "#FFFFFF",
    },
    zinc: {
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      500: "#71717a",
      800: "#27272a",
    },
    error: {
      500: "#ef4444",
    },
  },
});
