import {
  createGlobalVar,
  createTheme,
  globalStyle,
  layer,
  style,
} from "@vanilla-extract/css";

export const layers = {
  reset: layer("reset"),
};

export const wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr min(1440px, 100%) 1fr",
});

globalStyle(`${wrapper} > *`, {
  gridColumn: "2",
});

export const fullBleed = style({
  width: "100%",
  gridColumn: "1 / 4",
});

export const soraFontVar = createGlobalVar("font-sora");

export const [themeClassName, theme] = createTheme({
  color: {
    primary: {
      black: "#000000",
      neutral: "#404040",
      white: "#FFFFFF",
    },
    zinc: {
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      500: "#71717a",
      800: "#27272a",
    },
    error: {
      500: "#ef4444",
    },
  },
});

globalStyle(
  "*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))",
  {
    "@layer": {
      [layers.reset]: {
        all: "unset",
        display: "revert",
      },
    },
  },
);

globalStyle("*, *::before, *::after", {
  "@layer": {
    [layers.reset]: {
      boxSizing: "border-box",
    },
  },
});

globalStyle("html", {
  "@layer": {
    [layers.reset]: {
      MozTextSizeAdjust: "none",
      WebkitTextSizeAdjust: "none",
      textSizeAdjust: "none",
    },
  },
});

globalStyle("a, button", {
  "@layer": {
    [layers.reset]: {
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent",
    },
  },
});

globalStyle("ol, ul, menu, summary", {
  "@layer": {
    [layers.reset]: {
      listStyle: "none",
    },
  },
});

globalStyle("img", {
  "@layer": {
    [layers.reset]: {
      maxInlineSize: "100%",
      maxBlockSize: "100%",
    },
  },
});

globalStyle("table", {
  "@layer": {
    [layers.reset]: {
      borderCollapse: "collapse",
    },
  },
});

globalStyle("input, textarea", {
  "@layer": {
    [layers.reset]: {
      WebkitUserSelect: "auto",
    },
  },
});

globalStyle("textarea", {
  "@layer": {
    [layers.reset]: {
      whiteSpace: "revert",
    },
  },
});

globalStyle("meter", {
  "@layer": {
    [layers.reset]: {
      WebkitAppearance: "revert",
      appearance: "revert",
    },
  },
});

globalStyle(":where(pre)", {
  "@layer": {
    [layers.reset]: {
      all: "revert",
      boxSizing: "border-box",
    },
  },
});

globalStyle("::placeholder", {
  "@layer": {
    [layers.reset]: {
      color: "unset",
    },
  },
});

globalStyle(':where([contenteditable]:not([contenteditable="false"]))', {
  // @ts-expect-error: -webkit-line-break is a non-standard property
  "@layer": {
    [layers.reset]: {
      MozUserModify: "read-write",
      WebkitUserModify: "read-write",
      overflowWrap: "break-word",
      WebkitLineBreak: "after-white-space",
      WebkitUserSelect: "auto",
    },
  },
});

globalStyle(':where([draggable="true"])', {
  "@layer": {
    [layers.reset]: {
      // @ts-expect-error: -webkit-user-drag is a non-standard property
      WebkitUserDrag: "element",
    },
  },
});

globalStyle(":where(dialog:modal)", {
  "@layer": {
    [layers.reset]: {
      all: "revert",
      boxSizing: "border-box",
    },
  },
});
