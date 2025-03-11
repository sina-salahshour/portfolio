import { style } from "@vanilla-extract/css";

import { mediaMobile, rootSection } from "../root.screen.css";

export const testimonialContainer = style([
  rootSection,
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
]);
export const testimonialHeader = style({
  height: "96px",
  display: "flex",
  alignItems: "center",
});
export const testimonialStack = style({
  display: "flex",
  justifyContent: "space-between",
  paddingInline: "24px",
  paddingBlock: "40px",
  width: "100%",
  "@media": {
    [mediaMobile]: {
      paddingInline: "0px",
      paddingBlock: "0px",
      flexDirection: "column",
      gap: "40px",
      alignItems: "center",
    },
  },
});
