import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { rootSection } from "../root.screen.css";

export const experienceWrapper = style({
  backgroundColor: theme.color.primary.black,
});

export const experienceContainer = style([
  rootSection,
  {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
]);
export const experienceHeader = style({
  color: theme.color.primary.white,
  height: "96px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const experienceCardStack = style({
  paddingBlock: "40px",
  paddingInline: "24px",
  marginInline: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});
