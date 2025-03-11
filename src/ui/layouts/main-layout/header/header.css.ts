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
      display: "none",
    },
  },
});

export const headerWrapper = style({
  position: "sticky",
  top: "0px",
  backgroundColor: "#fff8",
  backdropFilter: "blur(5px)",
  zIndex: "50",
});

export const headerLinkStack = style({
  display: "flex",
  gap: "32px",
});

export const resumeButton = style({
  position: "absolute",
  top: "50%",
  right: "32px",
  transform: "translateY(-50%)",
});

export const resumeButtonIcon = style({
  width: "15px",
  height: "15px",
});
