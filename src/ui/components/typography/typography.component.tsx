import type { PropsWithChildren } from "react";

type TypographyProps = PropsWithChildren;
export function Typography(props: TypographyProps) {
  return <span>{props.children}</span>;
}
