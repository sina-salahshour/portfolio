import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { mediaMobile, rootSection } from "../root.screen.css";

export const experienceWrapper = style({
  backgroundColor: theme.color.primary.black,
});

export const experienceContainer = style([
  rootSection,
  {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "@media": {
      [mediaMobile]: {
        gap: "10px",
      },
    },
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
  "@media": {
    [mediaMobile]: {
      paddingBlock: "0px",
      paddingInline: "0px",
      marginInline: "0px",
      gap: "20px",
    },
  },
});
