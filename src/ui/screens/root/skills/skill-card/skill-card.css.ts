import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { mediaMobile } from "../../root.screen.css";

export const skillCardContainer = style({
  border: "2px solid",
  borderColor: theme.color.primary.black,
  width: "186px",
  height: "186px",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  transition: "all 250ms",
  selectors: {
    "&:nth-child(odd)": {
      backgroundColor: theme.color.primary.black,
      color: theme.color.primary.white,
    },
  },
  "@media": {
    [mediaMobile]: {
      width: "160px",
      height: "160px",
      selectors: {
        "&:nth-child(odd)": {
          backgroundColor: theme.color.primary.white,
          color: theme.color.primary.black,
        },
      },
    },
  },
});

export const skillCardIcon = style({
  width: "56px",
  height: "56px",
  transition: "all 250ms",
  filter: "grayscale(1)",
  selectors: {
    [`${skillCardContainer}:nth-child(odd) &`]: {
      filter: "grayscale(1) invert(1)",
    },
  },
  "@media": {
    [mediaMobile]: {
      selectors: {
        [`${skillCardContainer}:nth-child(odd) &`]: {
          filter: "grayscale(1)",
        },
      },
    },
  },
});
