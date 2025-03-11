import { style } from "@vanilla-extract/css";

export const buttonText = style({
  ":hover": {
    fontSize: "20px",
    lineHeight: "24px",
    textDecoration: "underline",
  },
});
