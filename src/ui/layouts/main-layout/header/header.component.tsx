import clsx from "clsx";

import DownloadIcon from "@/assets/svg/(main-layout)/download.svg";
import { LinkButton } from "@/ui/components/button/link-button.component";
import { Typography } from "@/ui/components/typography/typography.component";

import { wrapper } from "../main-layout.css";
import { menuInput } from "./hamburger-menu-button.css";
import {
  headerContainer,
  headerLinkStack,
  headerWrapper,
  resumeButton,
  resumeButtonIcon,
} from "./header.css";
import { HeaderLinkButton } from "./link-button/link-button.component";

const menuItems = [
  {
    title: "About Me",
    link: "#about",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Project",
    link: "#project",
  },
  {
    title: "Contact Me",
    link: "#contact",
  },
];

export function MainLayoutHeaderSection() {
  return (
    <div className={clsx(wrapper, headerWrapper)}>
      <header className={headerContainer}>
        <div className={headerLinkStack}>
          {menuItems.map((item) => (
            <HeaderLinkButton key={item.link} href={item.link}>
              {item.title}
            </HeaderLinkButton>
          ))}
        </div>
        <LinkButton
          href="/resume.pdf"
          download="Sina-Salahshour-resume.pdf"
          target="_blank"
          className={resumeButton}
        >
          <Typography type="button" weight="semibold">
            Resume
          </Typography>{" "}
          <DownloadIcon className={resumeButtonIcon} />
        </LinkButton>
      </header>
    </div>
  );
}
