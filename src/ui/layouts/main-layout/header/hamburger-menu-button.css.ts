import { style } from "@vanilla-extract/css";

import { theme } from "../main-layout.css";

export const menuInputContainer = style({
  width: "40px",
  height: "40px",
  backgroundColor: "#fff8",
  backdropFilter: "blur(2px)",
  borderRadius: "4px",
  position: "fixed",
  top: "24px",
  right: "24px",
  zIndex: "100",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  selectors: {
    "&:has(input:checked)": {
      backdropFilter: "blur(0px)",
      backgroundColor: "transparent",
    },
  },
});
export const menuInput = style({
  position: "relative",
  mixBlendMode: "revert",
  appearance: "none",
  transition: "all 250ms",
  display: "inline-block",
  width: "28px",
  height: "28px",
  backgroundImage: "linear-gradient(to right,black, black)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "28px 3px",
  backgroundPosition: "center 11px",

  selectors: {
    "&::after, &::before": {
      transition: "all 0.25s",
      content: '""',
      position: "absolute",
      width: "28px",
      height: "3px",
      backgroundColor: theme.color.primary.black,
      transform: "translateY(-50%)",
    },
    "&::after": {
      top: "3px",
    },
    "&::before": {
      bottom: "3px",
    },
    "&:checked": {
      backgroundPosition: "36px center",
    },
    "&:checked::before": {
      top: "14px",
      transform: "translateY(-50%) rotateZ(45deg)",
    },
    "&:checked::after": {
      top: "14px",
      transform: "translateY(-50%) rotateZ(-45deg)",
    },
  },
});
