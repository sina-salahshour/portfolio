import { createVar, style } from "@vanilla-extract/css";

import { theme } from "@/ui/layouts/main-layout/main-layout.css";

const cardTextColor = createVar("card-text-color");
const cardBackgroundColor = createVar("card-background-color");

export const testimonialCardContainer = style({
  display: "flex",
  margin: "auto",
  flexDirection: "column",
  padding: "40px",
  gap: "24px",
  width: "350px",
  boxShadow:
    "0px 6px 8px -6px rgba(24, 39, 75, 0.22), 0px 8px 16px -6px rgba(24, 39, 75, 0.18)",
  borderRadius: "20px",
  textAlign: "center",
  backgroundColor: cardBackgroundColor,
  color: cardTextColor,
  vars: {
    [cardTextColor]: theme.color.primary.black,
    [cardBackgroundColor]: theme.color.primary.white,
  },
  selectors: {
    "&[data-secondary=true]": {
      vars: {
        [cardTextColor]: theme.color.primary.white,
        [cardBackgroundColor]: theme.color.primary.black,
      },
    },
  },
});

export const testimonialCardFigure = style({
  width: "96px",
  height: "96px",
  position: "relative",
  marginInline: "auto",
});

export const testimonialCardImage = style({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  border: "1px solid",
  borderColor: theme.color.primary.black,
  objectFit: "cover",
});

export const testimonialCardQuoteContainer = style({
  width: "30px",
  height: "30px",
  backgroundColor: cardTextColor,
  position: "absolute",
  bottom: "0px",
  right: "0px",
  display: "flex",
  borderRadius: "50%",
});
export const testimonialCardQuote = style({
  width: "12.92px",
  height: "9.26px",
  margin: "auto",

  selectors: {
    [`${testimonialCardContainer}[data-secondary=true] &`]: {
      filter: "invert(1)",
    },
  },
});

export const testimonialCardSeparator = style({
  backgroundColor: cardTextColor,
  marginInline: "auto",
  width: "120px",
  height: "2px",
});
