"use client";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

import { navbarMenuBackground } from "../header.css";
import { hamburgerContainer, hamburgerLine } from "./hamburger-menu-button.css";

interface HamburgerMenuButtonProps {
  isOpen: boolean;
  onToggle(v: boolean): void;
}

export function HamburgerMenuButton(props: HamburgerMenuButtonProps) {
  const isOpen = props.isOpen;
  return (
    <motion.button
      data-hamburger-open={isOpen}
      variants={buttonVariants}
      animate={isOpen ? "enabled" : "idle"}
      whileHover={isOpen ? "enabled-hover" : "idle-hover"}
      className={hamburgerContainer}
      onTap={() => props.onToggle(!isOpen)}
    >
      <motion.div
        variants={topLineVariants}
        className={hamburgerLine}
        transformTemplate={centeredTransformTemplate}
      ></motion.div>
      <motion.div
        variants={centerLineVariants}
        className={hamburgerLine}
        transformTemplate={centeredTransformTemplate}
      ></motion.div>
      <motion.div
        variants={bottomLineVariants}
        className={hamburgerLine}
        transformTemplate={centeredTransformTemplate}
      ></motion.div>
      {!isOpen && (
        <motion.div
          style={{
            borderRadius: "4px",
          }}
          transition={{
            delay: 0.1,
          }}
          className={navbarMenuBackground}
          layoutId="navigation-menu-background"
        ></motion.div>
      )}
    </motion.button>
  );
}

const centeredTransformTemplate = (_: unknown, generated: string) =>
  `translate(-50%, -50%)` + generated;

const buttonVariants = {
  idle: {
    zIndex: 30,
  },
  "idle-hover": {},
  enabled: {
    zIndex: 100,
    x: [0, -4, 0],
    transition: {
      rotate: {
        duration: 1,
      },
    },
  },
  "enabled-hover": {},
} satisfies Variants;

const topLineVariants = {
  idle: {
    y: -10,
  },
  "idle-hover": {
    y: -8,
  },
  enabled: {
    rotateZ: 45,
    y: 0,
  },
  "enabled-hover": {},
} satisfies Variants;

const centerLineVariants = {
  idle: {
    opacity: 1,
    x: "0%",
    width: "28px",
  },
  "idle-hover": {
    width: "24px",
  },
  enabled: {
    opacity: 0,
    x: "-70%",
    width: "13px",
  },
  "enabled-hover": {},
} satisfies Variants;

const bottomLineVariants = {
  idle: {
    y: 10,
  },
  "idle-hover": { y: 8 },
  enabled: {
    rotateZ: -45,
    y: 0,
  },
  "enabled-hover": {},
} satisfies Variants;
