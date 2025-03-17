import clsx from "clsx";

import CodepenIcon from "@/assets/svg/(comunication)/codepen.svg";
import GithubIcon from "@/assets/svg/(comunication)/github.svg";
import LinkedinIcon from "@/assets/svg/(comunication)/linkedin.svg";
import MailIcon from "@/assets/svg/(comunication)/mail.svg";
import type { PropsWithClassName } from "@/types/props-with-class-name";
import { LinkButton } from "@/ui/components/button/link-button.component";

import { linkButton, linkContainer, linkIcon } from "./contact-links.css";

const links = [
  {
    label: "linkedin",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/sina-salahshour-54b2a5232/",
  },
  {
    label: "github",
    icon: GithubIcon,
    href: "https://github.com/sina-salahshour",
  },
  {
    label: "codepen",
    icon: CodepenIcon,
    href: "https://codepen.io/sina-salahshour",
  },
  {
    label: "mail",
    icon: MailIcon,
    href: "mailto:sina.salahshour.32@gmail.com",
  },
];
type ContactLinksProps = PropsWithClassName;
export function ContactLinks(props: ContactLinksProps) {
  return (
    <div className={clsx(linkContainer, props.className)}>
      {links.map((link, index) => (
        <LinkButton
          target="_blank"
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
