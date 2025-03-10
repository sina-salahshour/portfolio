import clsx from "clsx";

import DummyContactLinkIcon from "@/assets/svg/(skills)/typescript.svg";
import type { PropsWithClassName } from "@/types/props-with-class-name";
import { LinkButton } from "@/ui/components/button/link-button.component";

import { linkButton, linkContainer, linkIcon } from "./contact-links.css";

const links = [
  {
    label: "facebook",
    icon: DummyContactLinkIcon,
    href: "https://google.com",
  },
  {
    label: "facebook",
    icon: DummyContactLinkIcon,
    href: "https://google.com",
  },
  {
    label: "facebook",
    icon: DummyContactLinkIcon,
    href: "https://google.com",
  },
  {
    label: "facebook",
    icon: DummyContactLinkIcon,
    href: "https://google.com",
  },
];
type ContactLinksProps = PropsWithClassName;
export function ContactLinks(props: ContactLinksProps) {
  return (
    <div className={clsx(linkContainer, props.className)}>
      {links.map((link, index) => (
        <LinkButton
          key={link.href + index}
          href={link.href}
          title={link.label}
          className={linkButton}
        >
          <link.icon className={linkIcon} />
        </LinkButton>
      ))}
    </div>
  );
}
