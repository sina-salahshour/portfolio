import { style } from "@vanilla-extract/css";

import { mediaMobile } from "@/ui/screens/root/root.screen.css";

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  backdropFilter: "blur(5px)",
  position: "relative",
  marginInline: "auto",
  border: "2px solid transparent",
  borderRadius: "8px",
  "@media": {
    [mediaMobile]: {
      height: "100dvh",
      flexDirection: "column",
      gap: "24px",
    },
  },
});

export const headerWrapper = style({
  position: "sticky",
  top: "0px",
  zIndex: "50",
  "@media": {
    [mediaMobile]: {
      inset: "0px",
      position: "fixed",
      pointerEvents: "none",
      opacity: "0",
    },
  },
});

export const headerLinkStack = style({
  display: "flex",
  gap: "32px",
  "@media": {
    [mediaMobile]: {
      flexDirection: "column",
    },
  },
});
export const headerLinkItem = style({
  position: "relative",
});

export const resumeButtonWrapper = style({
  position: "absolute",
  right: "24px",
});

export const resumeButton = style({
  "@media": {
    [mediaMobile]: {
      position: "static",
      transform: "translateY(0%)",
    },
  },
});

export const resumeButtonIcon = style({
  width: "15px",
  height: "15px",
});

export const linkHoverIndicator = style({
  width: "100%",
  height: "2px",
  transition: "background-color 250ms",
  position: "absolute",
  borderRadius: "2px",
  bottom: "0px",
  left: "0px",
  selectors: {
    [`${headerLinkStack}:hover &`]: {
      backgroundColor: "black",
    },
  },
});
