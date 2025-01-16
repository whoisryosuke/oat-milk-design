import { PropsWithChildren } from "react";
import ThemeProvider from "./ThemeProvider/ThemeProvider";

type Props = {};

const AppWrapper = ({ children }: PropsWithChildren<Props>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppWrapper;
