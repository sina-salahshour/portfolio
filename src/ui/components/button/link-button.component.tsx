import clsx from "clsx";
import type { ComponentProps } from "react";

import { buttonContainer } from "./button.css";

type ButtonProps = ComponentProps<"a"> & {
  size?: "medium" | "small";
};
export function LinkButton(props: ButtonProps) {
  const { size: _, className: __, ...rest } = props;
  return (
    <a
      {...rest}
      className={clsx(
        props.className,
        buttonContainer({ size: props.size ?? "medium" }),
      )}
    />
  );
}
