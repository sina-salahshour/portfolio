import type { RecipeVariants } from "@vanilla-extract/recipes";
import clsx from "clsx";
import type { JSX, PropsWithChildren } from "react";

import type { PropsWithClassName } from "@/types/props-with-class-name";

import { typographyStyle } from "./typography.css";

type TypographyProps = PropsWithChildren &
  RecipeVariants<typeof typographyStyle> &
  PropsWithClassName & {
    as?: keyof JSX.IntrinsicElements;
  };
export function Typography(props: TypographyProps) {
  const Component = props.as ?? "span";
  return (
    <Component
      className={clsx(
        typographyStyle({
          type: props.type ?? "display-text",
          weight: props.weight ?? "normal",
        }),
        props.className,
      )}
    >
      {props.children}
    </Component>
  );
}
