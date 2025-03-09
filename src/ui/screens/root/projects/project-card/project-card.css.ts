import { style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

export const projectCardContainer = style({
  paddingBlock: "20px",
  display: "flex",
  gap: "40px",
  color: theme.color.primary.white,
  alignItems: "center",
  selectors: {
    "&:nth-child(even)": {
      flexDirection: "row-reverse",
    },
  },
});

export const projectLinkIcon = style({
  width: "20px",
  height: "20px",
});

export const projectCardFigure = style({
  position: "relative",
  width: "530px",
  height: "397px",
  flexShrink: "0",
  borderRadius: "18.76px",
  overflow: "hidden",
  marginBlock: "39.13px",
  selectors: {
    [`${projectCardContainer}:nth-child(even) &`]: {
      marginInlineStart: "64px",
    },
    [`${projectCardContainer}:nth-child(odd) &`]: {
      marginInlineEnd: "64px",
    },
  },
});
export const projectCardImage = style({
  objectFit: "cover",
});

export const projectCardContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
});

export const projectCardDescription = style({
  color: theme.color.zinc[500],
});
