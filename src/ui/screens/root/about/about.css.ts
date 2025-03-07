import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { rootSection } from "../root.screen.css";

export const aboutContainer = style([
  rootSection,
  {
    paddingInline: "32px",
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
  },
]);

export const aboutBanner = style({
  width: "525.45px",
  height: "fit-content",
  marginBottom: "-42px",
  flexShrink: "0",
});

export const aboutInfoContainer = style({
  width: "610px",
});

export const aboutInfoHeader = style({
  height: "96px",
});

export const aboutInfoStack = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  color: theme.color.zinc[500],
});
