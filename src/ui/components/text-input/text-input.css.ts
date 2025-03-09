import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { typographyStyle } from "../typography/typography.css";

export const textInputContainer = style({
  position: "relative",
});

export const textInputRoot = style([
  typographyStyle({ type: "h6", weight: "normal" }),
  {
    width: "100%",
    border: "1.4px solid",
    borderRadius: "4px",
    borderColor: theme.color.zinc[500],
    paddingInline: "24px",
    paddingBlock: "17px",
    transition: "all 250ms",
    "::placeholder": {
      color: theme.color.zinc[500],
    },
    ":hover": {
      backgroundColor: theme.color.zinc[100],
    },
    ":focus": {
      backgroundColor: "transparent",
      boxShadow:
        "0px 2px 4px -2px rgba(24, 39, 75, 0.18), 0px 4px 4px -2px rgba(24, 39, 75, 0.18)",
    },
    ":placeholder-shown": {
      borderColor: theme.color.primary.black,
    },
    ":disabled": {
      backgroundColor: theme.color.zinc[100],
      borderColor: theme.color.zinc[200],
      color: theme.color.zinc[300],
      cursor: "not-allowed",
    },
    selectors: {
      "&[data-error=true]": {
        borderColor: theme.color.error[500],
        color: theme.color.error[500],
      },
      "&:disabled::placeholder": {
        color: theme.color.zinc[300],
      },
    },
  },
]);

export const textInputError = style({
  marginTop: "6px",
  color: theme.color.error[500],
  position: "absolute",
  top: "100%",
  left: "0%",
  width: "100%",
});
