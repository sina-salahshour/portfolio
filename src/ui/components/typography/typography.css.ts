import { createVar, fallbackVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { soraFontVar, theme } from "@/ui/layouts/main-layout/main-layout.css";

export const textStrokeColorVar = createVar("text-sroke-color");
export const typographyStyle = recipe({
  base: {
    fontFamily: soraFontVar,
    letterSpacing: "0.02em",
    fontStyle: "normal",
  },
  variants: {
    type: {
      "display-text": {
        fontSize: "48px",
        lineHeight: "56px",
      },
      outlined: {
        fontSize: "48px",
        lineHeight: "56px",
        WebkitTextStrokeColor: fallbackVar(
          textStrokeColorVar,
          theme.color.primary.black,
        ),
        WebkitTextFillColor: "currentcolor",
        WebkitTextStrokeWidth: 3,
        paintOrder: "stroke fill",
      },
      "display-text-m": {
        fontSize: "24px",
        lineHeight: "28px",
      },
      "outlined-m": {
        fontSize: "24px",
        lineHeight: "28px",
        WebkitTextStrokeColor: fallbackVar(
          textStrokeColorVar,
          theme.color.primary.black,
        ),
        WebkitTextFillColor: "currentcolor",
        WebkitTextStrokeWidth: 1.4,
        paintOrder: "stroke fill",
      },
      "sub-h": {
        fontSize: "40px",
        lineHeight: "48px",
      },
      h1: {
        fontSize: "36px",
        lineHeight: "44px",
      },
      h2: {
        fontSize: "32px",
        lineHeight: "40px",
      },
      h3: {
        fontSize: "28px",
        lineHeight: "32px",
      },
      h4: {
        fontSize: "24px",
        lineHeight: "28px",
      },
      h5: {
        fontSize: "20px",
        lineHeight: "24px",
      },
      h6: {
        fontSize: "16px",
        lineHeight: "20px",
      },
      p1: {
        fontSize: "20px",
        lineHeight: "24px",
      },
      p2: {
        fontSize: "16px",
        lineHeight: "20px",
      },
      p3: {
        fontSize: "12px",
        lineHeight: "16px",
      },
      button: {
        fontSize: "20px",
        lineHeight: "24px",
      },
      button2: {
        fontSize: "16px",
        lineHeight: "20px",
      },
      underline: {
        fontSize: "20px",
        lineHeight: "24px",
        textDecoration: "underline",
      },
    },
    weight: {
      normal: {
        fontWeight: "400",
      },
      semibold: {
        fontWeight: "600",
      },
      "heading-bold": {
        fontWeight: "700",
      },
      "heading-x-bold": {
        fontWeight: "800",
      },
    },
  },
});
