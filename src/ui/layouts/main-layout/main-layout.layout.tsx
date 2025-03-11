import clsx from "clsx";
import type { ComponentProps, PropsWithChildren } from "react";

import { MainLayoutHeaderSection } from "./header/header.component";
import { wrapper } from "./main-layout.css";

export type MainLayoutProps = PropsWithChildren & ComponentProps<"main">;
export function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <MainLayoutHeaderSection />
      <main {...props} className={clsx(wrapper, props.className)} />
    </>
  );
}
