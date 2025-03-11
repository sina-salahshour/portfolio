import clsx from "clsx";
import type { ComponentProps, PropsWithChildren } from "react";

import {
  menuInput,
  menuInputContainer,
} from "./header/hamburger-menu-button.css";
import { MainLayoutHeaderSection } from "./header/header.component";
import { wrapper } from "./main-layout.css";

export type MainLayoutProps = PropsWithChildren & ComponentProps<"main">;
export function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={menuInputContainer}>
        <input type="checkbox" className={menuInput} />
      </div>
      <MainLayoutHeaderSection />
      <main {...props} className={clsx(wrapper, props.className)} />
    </>
  );
}
