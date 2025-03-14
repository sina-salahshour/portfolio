import { style } from "@vanilla-extract/css";

import { mediaMobile } from "@/ui/screens/root/root.screen.css";

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
  height: "104px",
  justifyContent: "center",
  position: "relative",
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
  backgroundColor: "#fff8",
  backdropFilter: "blur(5px)",
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

export const resumeButton = style({
  position: "absolute",
  top: "50%",
  right: "32px",
  transform: "translateY(-50%)",
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
