import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

export const heroContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

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
});
