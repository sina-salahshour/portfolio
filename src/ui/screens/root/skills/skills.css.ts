import { style } from "@vanilla-extract/css";

import { rootSection } from "../root.screen.css";

export const skillsContainer = style([
  rootSection,
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
]);
export const skillsHeader = style({
  height: "96px",
  display: "flex",
  alignItems: "center",
});
export const skillsGrid = style({
  paddingBlock: "40px",
  display: "grid",
  rowGap: "40px",
  width: "100%",
  gridTemplateColumns: "repeat(auto-fit, minmax(224px, 1fr))",
  placeItems: "center",
});
