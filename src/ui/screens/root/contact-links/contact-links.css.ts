import { globalStyle, style } from "@vanilla-extract/css";

export const linkContainer = style({
  display: "flex",
  gap: "24px",
});

export const linkButton = style({
  paddingInline: "0px",
});

export const linkIcon = style({
  width: "40px",
  height: "40px",
});

globalStyle(`${linkIcon} path`, {
  fill: "currentcolor",
});
