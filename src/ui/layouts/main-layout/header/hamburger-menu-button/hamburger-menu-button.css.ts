import { globalStyle, style } from "@vanilla-extract/css";

import { mediaMobile } from "@/ui/screens/root/root.screen.css";

import { theme } from "../../main-layout.css";

export const hamburgerContainer = style({
  width: "40px",
  height: "40px",
  position: "fixed",
  top: "24px",
  right: "24px",
  borderRadius: "4px",
  opacity: "0",
  pointerEvents: "none",
  zIndex: "100",
  "@media": {
    [mediaMobile]: {
      opacity: "1",
      pointerEvents: "initial",
    },
  },
});
globalStyle(`body:has([data-hamburger-open=true])`, {
  "@media": {
    [mediaMobile]: {
      overflow: "hidden",
    },
  },
});
export const hamburgerLine = style({
  width: "28px",
  height: "3px",
  backgroundColor: theme.color.primary.black,
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  position: "absolute",
  transformOrigin: "center",
  borderRadius: "1px",
  zIndex: "100",
});
