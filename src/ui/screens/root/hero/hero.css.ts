import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { mediaMobile, rootSection } from "../root.screen.css";

export const heroContainer = style([
  rootSection,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media": {
      [mediaMobile]: {
        flexDirection: "column-reverse",
        gap: "48px",
      },
    },
  },
]);

export const headingText = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const selfDescription = style({
  color: theme.color.zinc["500"],
  marginTop: "32px",
  textWrap: "balance",
});

export const heroBanner = style({
  width: "889px",
  height: "fit-content",
  marginLeft: "-273px",
  flexShrink: "0",
  "@media": {
    [mediaMobile]: {
      width: "100%",
      marginLeft: "0px",
      transform: "translateX(-5%)",
    },
  },
});

export const contactLinks = style({
  marginLeft: "80px",
  marginTop: "-90px",
  "@media": {
    [mediaMobile]: {
      marginTop: "0px",
      marginInline: "16px",
    },
  },
});
