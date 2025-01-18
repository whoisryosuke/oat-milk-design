import { DefaultTheme } from "styled-components";
import { MEDIA_QUERIES } from "../themes/tokens";

const PROP_TO_CSS = {
  m: ["margin"],
  mx: ["margin-left", "margin-right"],
  my: ["margin-top", "margin-bottom"],
  ml: ["margin-left"],
  mr: ["margin-right"],
  mt: ["margin-top"],
  mb: ["margin-bottom"],
  p: ["padding"],
  px: ["padding-left", "padding-right"],
  py: ["padding-top", "padding-bottom"],
  pl: ["padding-left", "padding-right"],
  pr: ["padding-right"],
  pt: ["padding-top"],
  pb: ["padding-bottom"],
};
type PropToCSS = typeof PROP_TO_CSS;
type PropToCSSKeys = keyof PropToCSS;
const PROPS_TO_THEME = {
  space: [
    "m",
    "mx",
    "my",
    "ml",
    "mr",
    "mt",
    "mb",
    "p",
    "px",
    "py",
    "pl",
    "pr",
    "pt",
    "pb",
  ],
} as const;
type PropsToTheme = typeof PROPS_TO_THEME;
type PropsToThemeKeys = keyof PropsToTheme;

export type ThemeTokenKey = string | number | undefined;

// <Box width={["200px", "400px", "600px"]} />
export const generateMultiUtilityMediaQueries = (
  utilityPropNames: string[],
  themeProp: DefaultTheme,
  // componentProps: Record<string, ThemeTokenKey | object>
  componentProps: unknown
) => {
  const styles = [
    [] as string[], // default
    [] as string[], // mobile
    [] as string[], // tablet
    [] as string[], // computer
    [] as string[], // desktop
    [] as string[], // widescreen
  ];
  const mediaQueries = Object.values(MEDIA_QUERIES);
  const propsToThemeMap = Object.entries(PROPS_TO_THEME);

  // Loop over each utility prop
  utilityPropNames.forEach((utilityPropName) => {
    const themeKey = propsToThemeMap.find(([_, propNames]) =>
      propNames.includes(
        utilityPropName as PropsToTheme[PropsToThemeKeys][number]
      )
    );
    if (!themeKey) return;
    const themeRef = themeProp[themeKey[0]];
    const componentProp = componentProps[utilityPropName];
    // Get the actual CSS property we'll target
    const cssPropName = PROP_TO_CSS[utilityPropName as PropToCSSKeys];

    // If it's not an array, just make it one so we can handle it like one
    const keys = !Array.isArray(componentProp)
      ? [componentProp]
      : componentProp;

    // Handle each responsive prop value
    // We basically use the `up()` here to access the theme prop quickly
    keys.map((key, index) => {
      if (!key) return;
      styles[index].push(`${cssPropName}: ${up([key], themeRef, 0)};`);
    });
  });

  // Combine all the styles together into media queries.
  return styles.map((breakpointStyles, index) => {
    const mediaQuery = mediaQueries[index];
    const style = `
      ${mediaQuery} {
        ${breakpointStyles.join("\n")}
      }
    `;

    return style;
  });
};

export const mrup = generateMultiUtilityMediaQueries;

// <Box width={["200px", "400px", "600px"]} />
export const generateUtilityMediaQueries = (
  cssPropName: string,
  initialKeys: ThemeTokenKey[] | ThemeTokenKey,
  themeProp: Record<string | number, string | number>
) => {
  const keys = !Array.isArray(initialKeys) ? [initialKeys] : initialKeys;

  const mediaQueries = Object.values(MEDIA_QUERIES);

  const styles = keys.map((key, index) => {
    if (!key) return;
    const mediaQuery = mediaQueries[index];

    const style = `
    ${mediaQuery} {
      ${cssPropName}: ${up([key], themeProp, 0)};
    }
    `;

    return style;
  });

  return styles.join("\n");
};

export const rup = generateUtilityMediaQueries;

// We accept multiple options for utility props (like paddingLeft and paddingHorizontal)
// This gives priority to whichever comes first in array (e.g. `[pl,px,p]` will do `pl` first)
export const generateUtilityProps = (
  keys: (string | number | undefined)[],
  themeProp: Record<string | number, string | number>,
  fallback: string | number
) => {
  const actualKey = keys.find((key) => key && key !== "");

  return actualKey
    ? actualKey in themeProp
      ? themeProp[actualKey]
      : actualKey
    : fallback;
};
export const up = generateUtilityProps;
