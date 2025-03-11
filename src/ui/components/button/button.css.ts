import { recipe } from "@vanilla-extract/recipes";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";
import { mediaMobile } from "@/ui/screens/root/root.screen.css";

export const buttonContainer = recipe({
  base: {
    backgroundColor: theme.color.primary.black,
    color: theme.color.primary.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid",
    borderColor: "transparent",
    borderRadius: "4px",
    transition: "all 250ms",
    gap: "8px",
    ":hover": {
      backgroundColor: theme.color.primary.neutral,
    },
    ":active": {
      borderColor: theme.color.primary.black,
      backgroundColor: theme.color.primary.white,
      color: theme.color.primary.black,
    },
  },
  variants: {
    size: {
      small: {
        height: "48px",
        minWidth: "48px",
        paddingInline: "16px",
      },
      medium: {
        height: "56px",
        minWidth: "56px",
        paddingInline: "20px",
        "@media": {
          [mediaMobile]: {
            height: "48px",
            minWidth: "48px",
            paddingInline: "16px",
          },
        },
      },
    },
  },
});
