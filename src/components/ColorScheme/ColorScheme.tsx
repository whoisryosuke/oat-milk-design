import { PropsWithChildren } from "react";
import { ThemeColors } from "../../themes/colors/base";
import generateDarkTheme from "../../themes/colors/dark";
import base from "../../themes/base";
import { ThemeProvider } from "@emotion/react";

type Props = {
  color: ThemeColors;
};

const ColorScheme = ({
  children,
  color = "green",
}: PropsWithChildren<Props>) => {
  const theme = {
    ...base,
    ...generateDarkTheme(color),
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ColorScheme;
