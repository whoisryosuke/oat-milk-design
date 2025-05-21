export const ANIMATION = {
  default: "400ms ease-in",
  fast: "300ms ease-in",
};

export const BREAKPOINTS_RAW = {
  default: 0,
  mobile: 320,
  tablet: 600,
  computer: 992,
  desktop: 1200,
  widescreen: 1600,
};

type Breakpoints = Record<keyof typeof BREAKPOINTS_RAW, string>;

// Converts breakpoints to pixel values
export const BREAKPOINTS: Breakpoints = Object.entries(BREAKPOINTS_RAW).reduce(
  (prev, curr) => {
    prev[curr[0] as keyof Breakpoints] = `${curr[1]}px`;
    return prev;
  },
  {} as Breakpoints
);

// export const BREAKPOINTS = {
//   mobile: "320px",
//   tablet: "600px",
//   computer: "992px",
//   desktop: "1200px",
//   widescreen: "1920px",
// };

type MediaQueries = Record<keyof typeof BREAKPOINTS, string>;
// Generates media queries formatted for Vanilla Extract
export const MEDIA_QUERIES: MediaQueries = {
  default: `@media (max-width: ${BREAKPOINTS.mobile})`,
  mobile: `@media (min-width: ${BREAKPOINTS.mobile})`,
  tablet: `@media (min-width: ${BREAKPOINTS.tablet})`,
  computer: `@media (min-width: ${BREAKPOINTS.computer})`,
  desktop: `@media (min-width: ${BREAKPOINTS.desktop})`,
  widescreen: `@media (min-width: ${BREAKPOINTS.widescreen})`,
};

export const FONTS = {
  body: `'IBM Plex Mono', 'Inter Tight', Helvetiva Neue, Helvetica, Arial, sans-serif`,
  heading: `'IBM Plex Mono', 'Hubot Sans', Montserrat, Helvetica, Arial, sans-serif`,
  monospace: "'IBM Plex Mono', 'Roboto Mono', Menlo, monospace",
};

export const FONT_WEIGHTS = {
  medium: 500,
  bold: 700,
};

export const FONT_SIZES = {
  0: 12,
  1: 14,
  2: 16,
  3: 20,
  4: 24,
  5: 32,
  6: 48,
  7: 64,
  8: 96,
};

export const FONT_SIZE_PROPERTIES = {
  0: `${FONT_SIZES[0]}px`,
  1: `${FONT_SIZES[1]}px`,
  2: `${FONT_SIZES[2]}px`,
  3: `${FONT_SIZES[3]}px`,
  4: `${FONT_SIZES[4]}px`,
  5: `${FONT_SIZES[5]}px`,
  6: `${FONT_SIZES[6]}px`,
  7: `${FONT_SIZES[7]}px`,
  8: `${FONT_SIZES[8]}px`,
};

export const TEXT_STYLES = {
  billboard: FONT_SIZES["8"],
  title: FONT_SIZES["7"],
  h1: FONT_SIZES["6"],
  h2: FONT_SIZES["5"],
  h3: FONT_SIZES["4"],
  h4: FONT_SIZES["3"],
  h5: FONT_SIZES["2"],
  h6: FONT_SIZES["1"],
  p: FONT_SIZES["1"],
  label: FONT_SIZES["0"],
};
export type TextStyles = keyof typeof TEXT_STYLES;

// export const SPACE = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const SPACE_PROPERTIES = {
  0: "0px",
  1: "2px",
  2: "4px",
  3: "8px",
  4: "16px",
  5: "24px",
  6: "32px",
  7: "48px",
  8: "64px",
  9: "96px",
  10: "128px",
  11: "192px",
  12: "256px",
  13: "512px",
};

export const COLUMN_PROPERTIES = {
  0: "256px",
  1: "288px",
  2: "320px",
  3: "384px",
  4: "448px",
  5: "512px",
  6: "576px",
  7: "672px",
  8: "768px",
  9: "896px",
  10: "1024px",
  11: "1152px",
  12: "1280px",
};

export const RADIUS_PROPERTIES = {
  0: "6px",
  1: "12px",
  2: "16px",
  3: "18px",
  4: "21px",
  5: "50px",
  default: "40px",
  round: "99em",
};

export const BLUR_PROPERTIES = {
  radius: {
    0: "0px",
    1: "4px",
    2: "12px",
    3: "36px",
    4: "48px",
    5: "64px",
    6: "128px",
  },
  mask: {
    0: "0.1",
    1: "0.25",
    2: "0.5",
    3: "0.9",
  },
};
