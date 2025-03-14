"use client";
import clsx from "clsx";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";

import DownloadIcon from "@/assets/svg/(main-layout)/download.svg";
import { LinkButton } from "@/ui/components/button/link-button.component";
import { Typography } from "@/ui/components/typography/typography.component";
import { useIsMobile } from "@/utils/use-is-mobile";

import { wrapper } from "../main-layout.css";
import { HamburgerMenuButton } from "./hamburger-menu-button/hamburger-menu-button.component";
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
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HamburgerMenuButton isOpen={isMenuOpen} onToggle={setIsMenuOpen} />
      <motion.div
        initial={false}
        animate={!isMobile ? "desktop" : isMenuOpen ? "open" : "idle"}
        variants={containerVariants}
        className={clsx(wrapper, headerWrapper)}
        layout
      >
        <header className={headerContainer}>
          <div className={headerLinkStack}>
            {menuItems.map((item) => (
              <motion.div variants={linkVariants} key={item.link}>
                <HeaderLinkButton href={item.link}>
                  {item.title}
                </HeaderLinkButton>
              </motion.div>
            ))}
          </div>
          <motion.div variants={resumelinkVariant}>
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
          </motion.div>
        </header>
      </motion.div>
    </>
  );
}

const containerVariants = {
  idle: {
    opacity: 0,
    pointerEvents: "none",
    height: "100dvh",
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
    pointerEvents: "auto",
    height: "100dvh",
  },
  desktop: {
    opacity: 1,
    pointerEvents: "auto",
    height: "104px",
  },
} satisfies Variants;
const linkVariants = {
  idle: {
    opacity: 0,
    x: -8,
  },
  open: {
    opacity: 1,
    x: 0,
  },
  desktop: {
    opacity: 1,
    transition: {},
  },
} satisfies Variants;

const resumelinkVariant = {
  idle: {
    opacity: 0,
    filter: "blur(4px)",
    y: 8,
  },
  open: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
  desktop: {
    display: "contents",
  },
} satisfies Variants;
