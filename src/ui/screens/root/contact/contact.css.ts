import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

import { rootSection } from "../root.screen.css";

export const contactContainer = style([
  rootSection,
  {
    display: "flex",
    justifyContent: "space-between",
    gap: "32px",
    paddingInline: "32px",
  },
]);

export const contactForm = style({
  flex: "1",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});
export const contactInfo = style({
  flex: "1",
  maxWidth: "608px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const contactHeadingL2 = style({
  marginTop: "12px",
});

export const contactInfoDescription = style({
  marginTop: "20px",
  color: theme.color.zinc[500],
});

export const contactInfoEmail = style({
  marginTop: "40px",
});

export const contactInfoNumber = style({
  marginTop: "16px",
});
