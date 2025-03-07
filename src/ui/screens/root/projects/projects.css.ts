import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { rootSection } from "../root.screen.css";

export const projectWrapper = style({
  backgroundColor: theme.color.primary.black,
});

export const projectContainer = style([
  rootSection,
  {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
]);

export const projectHeader = style({
  color: theme.color.primary.white,
  height: "96px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
