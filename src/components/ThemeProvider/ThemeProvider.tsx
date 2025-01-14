import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme, base, themes } from "../../themes";
import { useAppStore } from "../../store/app";
import generateDarkTheme from "../../themes/colors/dark";

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  theme?: Partial<Theme>;
}

export function ThemeProvider({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) {
  const { theme, colorMode } = useAppStore();

  // @TODO: Put light mode back once colors are consolidated
  const themeStyles =
    theme === "light"
      ? generateDarkTheme(colorMode)
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
