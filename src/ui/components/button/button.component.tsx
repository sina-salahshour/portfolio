import clsx from "clsx";
import type { ComponentProps } from "react";

import { buttonContainer } from "./button.css";

type ButtonProps = ComponentProps<"button"> & {
  size?: "medium" | "small";
};
export function Button(props: ButtonProps) {
  const { size: _, className: __, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(
        props.className,
        buttonContainer({ size: props.size ?? "medium" }),
      )}
    />
  );
}
