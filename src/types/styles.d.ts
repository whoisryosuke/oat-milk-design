// import original module declarations
import "@emotion/react";

import { BaseTheme } from "../themes/base";
import { ColorTheme } from "../themes/colors/dark";

// and extend them!
declare module "@emotion/react" {
  export interface Theme extends BaseTheme, ColorTheme {}
}
