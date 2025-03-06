import clsx from "clsx";
import type { ComponentProps, PropsWithChildren } from "react";

import { themeClassName } from "./main-layout.css";

export type MainLayoutProps = PropsWithChildren & ComponentProps<"main">;
export function MainLayout(props: MainLayoutProps) {
  return <main {...props} className={clsx(themeClassName, props.className)} />;
}
