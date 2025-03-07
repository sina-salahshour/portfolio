import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

export const experienceCardContainer = style({
  border: "1px solid",
  borderColor: theme.color.zinc[500],
  borderRadius: "10px",
  paddingBlock: "30px",
  paddingInline: "24px",
  color: theme.color.zinc[300],
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  transition: "all 250ms",

  ":hover": {
    backgroundColor: theme.color.zinc[800],
    borderColor: theme.color.zinc[800],
  },
});

export const experienceHeading = style({
  display: "flex",
  gap: "30px",
  height: "32px",
  color: theme.color.primary.white,
});

export const experienceDateRange = style({
  color: theme.color.zinc[300],
  marginLeft: "auto",
});
