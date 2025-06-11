import { ThemeProvider as StyledThemeProvider } from "@emotion/react";
import { Theme, base } from "../../themes";
import { useThemeStore } from "../../store/app";
import generateDarkTheme from "../../themes/colors/dark";
import generateLightTheme from "../../themes/colors/light";

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  theme?: Partial<Theme>;
}

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const { theme, colorMode } = useThemeStore();

  // @TODO: Put light mode back once colors are consolidated
  const themeStyles =
    theme === "light"
      ? generateLightTheme(colorMode)
      : generateDarkTheme(colorMode);
  const baseTheme = {
    ...base,
    ...themeStyles,
  };

  return (
    <StyledThemeProvider theme={baseTheme}>{children}</StyledThemeProvider>
  );
}

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;
