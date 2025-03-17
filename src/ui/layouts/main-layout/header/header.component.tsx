"use client";
import clsx from "clsx";
import { transform } from "motion";
import type { Variants } from "motion/react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import DownloadIcon from "@/assets/svg/(main-layout)/download.svg";
import { LinkButton } from "@/ui/components/button/link-button.component";
import { Typography } from "@/ui/components/typography/typography.component";
import { useIsMobile } from "@/utils/use-is-mobile";

import { wrapper } from "../main-layout.css";
import { HamburgerMenuButton } from "./hamburger-menu-button/hamburger-menu-button.component";
import {
  headerContainer,
  headerLinkItem,
  headerLinkStack,
  headerWrapper,
  linkHoverIndicator,
  navbarMenuBackground,
  navbarMenuMask,
  resumeButton,
  resumeButtonIcon,
  resumeButtonWrapper,
} from "./header.css";
import { HeaderLinkButton } from "./link-button/link-button.component";

const menuItems = [
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "About Me",
    link: "#about",
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
  const [isNavbarHiddenRaw, setIsNavbarHidden] = useState(false);
  const isNavbarHidden = !isMobile && isNavbarHiddenRaw;
  const scroll = useScroll();
  const lastScrollYRef = useRef(0);
  useMotionValueEvent(scroll.scrollY, "change", (y) => {
    const difference = y - lastScrollYRef.current;
    if (y < 500 && !isNavbarHiddenRaw) {
      return;
    }

    if (Math.abs(difference) > 50) {
      setIsNavbarHidden(difference > 0);

      lastScrollYRef.current = y;
    }
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [isMobile]);
  const navbarChangeProgress = useTransform(scroll.scrollY, (latest) => {
    if (isMobile) {
      return 0;
    }
    return transform(latest, [0, 500], [0, 1]);
  });
  const navbarHeight = useTransform(navbarChangeProgress, (latest) => {
    if (isMobile) {
      return "100dvh";
    }
    return transform(latest, [0, 1], [104, 80]);
  });
  const [lastHovered, setLastHovered] = useState("");
  const downloadButtonScale = useTransform(
    navbarChangeProgress,
    [0, 1],
    [1, 0.8],
  );
  const downloadButtonX = useTransform(navbarChangeProgress, [0, 1], [0, 28]);
  const navbarPadding = useTransform(navbarChangeProgress, [0, 1], [0, 8]);
  const navbarBorderRadius = useTransform(navbarChangeProgress, (latest) => {
    if (isMobile) return 10;
    return transform(latest, [0, 1], [4, 8]);
  });
  const navbarBorderColor = useTransform(
    navbarChangeProgress,
    [0, 0.5, 1],
    ["#0000", "#0000", "#000f"],
  );
  const navbarWidth = useTransform(navbarChangeProgress, (latest) => {
    if (isMobile) {
      return "min(calc(100% - 64px), 280px)";
    }
    return transform(latest, [0, 1], ["calc(100% - 0px)", "calc(100% - 24px)"]);
  });
  return (
    <>
      <motion.div
        animate={!isMobile ? "desktop" : isMenuOpen ? "open" : "idle"}
        variants={containerVariants}
        whileHover="hover"
        onTap={() => {
          setIsNavbarHidden(false);
        }}
        className={clsx(wrapper, headerWrapper)}
        custom={isNavbarHidden}
        style={{
          height: navbarHeight,
          paddingTop: navbarPadding,
        }}
        layout
        initial="idle"
      >
        {isMobile && (
          <motion.button
            className={navbarMenuMask}
            variants={navbarMenuMaskVariant}
            onClick={() => setIsMenuOpen(false)}
          ></motion.button>
        )}
        <HamburgerMenuButton isOpen={isMenuOpen} onToggle={setIsMenuOpen} />
        <motion.header
          style={{
            width: navbarWidth,
            borderRadius: navbarBorderRadius,
            borderColor: navbarBorderColor,
          }}
          variants={navbarVariants}
          custom={isNavbarHidden}
          className={headerContainer}
          layout
        >
          {isMenuOpen && (
            <motion.div
              layout
              style={{
                borderRadius: "8px",
              }}
              className={navbarMenuBackground}
              layoutId="navigation-menu-background"
            ></motion.div>
          )}
          <ul className={headerLinkStack}>
            {menuItems.map((item) => (
              <li
                className={headerLinkItem}
                key={item.link}
                style={{ position: "relative" }}
              >
                <motion.div
                  style={{ scale: downloadButtonScale }}
                  variants={linkVariants}
                  onHoverStart={() => setLastHovered(item.link)}
                >
                  <HeaderLinkButton
                    href={item.link}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </HeaderLinkButton>
                </motion.div>
                {!isMobile && lastHovered === item.link && (
                  <motion.div
                    style={{ scale: downloadButtonScale }}
                    className={linkHoverIndicator}
                    layoutId="navlink-hover-indicator"
                  ></motion.div>
                )}
              </li>
            ))}
          </ul>
          <motion.div
            style={{
              scale: downloadButtonScale,
              x: downloadButtonX,
            }}
            variants={resumelinkVariant}
            className={resumeButtonWrapper}
            transformTemplate={resumeButtonTransformTemplate}
          >
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
        </motion.header>
      </motion.div>
    </>
  );
}

const resumeButtonTransformTemplate = (
  { z }: { z: string },
  generated: string,
) => `translateX(${z})` + generated;
const containerVariants = {
  idle: {
    opacity: 1,
    pointerEvents: "none",
    transition: {},
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
    pointerEvents: "auto",
  },
  desktop: (isHidden: boolean) => ({
    y: isHidden ? "-70%" : "0%",
    opacity: 1,
    pointerEvents: "auto",
  }),
  hover: {
    y: "0%",
  },
} satisfies Variants;
const navbarVariants = {
  idle: {},
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  hover: {
    y: "0%",
  },
} satisfies Variants;
const linkVariants = {
  idle: {
    opacity: 0,
    x: 32,
    y: -32,
  },
  open: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  desktop: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  hover: {},
} satisfies Variants;

const resumelinkVariant = {
  idle: {
    transition: {
      position: { duration: 0 },
    },
    position: "static",
    opacity: 0,
    filter: "blur(4px)",
    y: -32,
    z: 32,
  },
  open: {
    transition: {
      position: { duration: 0 },
    },
    position: "static",
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    z: 0,
  },
  desktop: {
    position: "absolute",
    right: "24px",
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    z: 0,
  },
} satisfies Variants;
const navbarMenuMaskVariant = {
  idle: {
    opacity: 0,
    pointerEvents: "none",
  },
  open: {
    opacity: 0.5,
    pointerEvents: "auto",
  },
} satisfies Variants;
