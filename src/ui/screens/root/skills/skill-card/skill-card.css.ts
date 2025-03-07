import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

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
  ":hover": {
    backgroundColor: theme.color.primary.black,
    color: theme.color.primary.white,
  },
});

export const skillCardIcon = style({
  width: "56px",
  height: "56px",
  transition: "all 250ms",
  selectors: {
    [`${skillCardContainer}:hover  &`]: {
      filter: "invert(1)",
    },
  },
});
