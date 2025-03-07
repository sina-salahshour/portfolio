import type { RecipeVariants } from "@vanilla-extract/recipes";
import type { PropsWithChildren } from "react";

import { typographyStyle } from "./typography.css";

type TypographyProps = PropsWithChildren &
  RecipeVariants<typeof typographyStyle>;
export function Typography(props: TypographyProps) {
  return (
    <span
      className={typographyStyle({
        type: props.type ?? "display-text",
        weight: props.weight ?? "normal",
      })}
    >
      {props.children}
    </span>
  );
}
