import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { mediaMobile, rootSection } from "../root.screen.css";

export const aboutContainer = style([
  rootSection,
  {
    paddingInline: "32px",
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
    "@media": {
      [mediaMobile]: {
        flexDirection: "column",
        paddingInline: "0px",
      },
    },
  },
]);

export const aboutBanner = style({
  width: "525.45px",
  height: "fit-content",
  flexShrink: "0",
  "@media": {
    [mediaMobile]: {
      width: "100%",
    },
  },
});

export const aboutInfoContainer = style({
  width: "610px",
  "@media": {
    [mediaMobile]: {
      width: "100%",
    },
  },
});

export const aboutInfoHeader = style({
  minHeight: "96px",
});

export const aboutInfoStack = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  color: theme.color.zinc[500],
});
