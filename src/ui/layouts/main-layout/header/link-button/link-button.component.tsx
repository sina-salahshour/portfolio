import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

import { Typography } from "@/ui/components/typography/typography.component";

import { buttonText } from "./link-button.css";

type ButtonProps = ComponentProps<typeof Link>;
export function HeaderLinkButton(props: ButtonProps) {
  const { className: __, children: ___, ...rest } = props;
  return (
    <Link {...rest} className={clsx(props.className)}>
      <Typography type="h5" weight="semibold" className={buttonText}>
        {props.children}
      </Typography>
    </Link>
  );
}
