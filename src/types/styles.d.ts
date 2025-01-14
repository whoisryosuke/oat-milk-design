// import original module declarations
import "styled-components";
import { BaseTheme } from "../themes/base";
import { ColorTheme } from "../themes/colors/dark";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme, ColorTheme {}
}
