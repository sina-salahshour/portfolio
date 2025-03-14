"use client";
import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, MouseEventHandler } from "react";

import { Typography } from "@/ui/components/typography/typography.component";
import { useIsMobile } from "@/utils/use-is-mobile";

import { buttonText } from "./link-button.css";

const navbarSize = 12;
type ButtonProps = ComponentProps<typeof Link>;
export function HeaderLinkButton(props: ButtonProps) {
  const isMobile = useIsMobile();
  const { className: _, children: __, onClick: ___, ...rest } = props;
  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    props.onClick?.(e);
    e.preventDefault();
    try {
      const element = document.querySelector(props.href.toString());
      if (element == null) {
        return;
      }

      window.scrollTo({
        top:
          element.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          (isMobile ? -12 : navbarSize),
        behavior: "smooth",
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <Link {...rest} onClick={onClick} className={clsx(props.className)}>
      <Typography type="h5" weight="semibold" className={buttonText}>
        {props.children}
      </Typography>
    </Link>
  );
}
