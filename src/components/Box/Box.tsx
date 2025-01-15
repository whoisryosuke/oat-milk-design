import { styled } from "styled-components";
import { ColorTheme } from "../../themes/colors/dark";
import { BaseTheme } from "../../themes/base";

type Props = {
  bg: keyof ColorTheme["colors"];
  color: keyof ColorTheme["colors"];
  p: keyof BaseTheme["space"];
  px: keyof BaseTheme["space"];
  py: keyof BaseTheme["space"];
  pl: keyof BaseTheme["space"];
  pr: keyof BaseTheme["space"];
  pb: keyof BaseTheme["space"];
  pt: keyof BaseTheme["space"];
  m: keyof BaseTheme["space"];
  mx: keyof BaseTheme["space"];
  my: keyof BaseTheme["space"];
};

// We accept multiple options for utility props (like paddingLeft and paddingHorizontal)
// This gives priority to whichever comes first in array (e.g. `[pl,px,p]` will do `pl` first)
const generateUtilityProps = (
  keys: string[] | number[],
  themeProp: Record<string | number, any>,
  fallback: string | number
) => {
  const actualKey = keys.find((key) => key && key !== "");

  return actualKey
    ? actualKey in themeProp
      ? themeProp[actualKey]
      : actualKey
    : fallback;
};
const up = generateUtilityProps;

const Box = styled.div<Props>`
  background-color: ${({ theme, bg }) => up([bg], theme.colors, "inherit")};
  color: ${({ theme, color }) => up([color], theme.colors, "inherit")};
  padding-left: ${({ theme, p, px, pl }) => up([pl, px, p], theme.space, 0)};
  padding-right: ${({ theme, p, px, pr }) => up([pr, px, p], theme.space, 0)};
  padding-top: ${({ theme, p, py, pt }) => up([pt, py, p], theme.space, 0)};
  padding-bottom: ${({ theme, p, py, pb }) => up([pb, py, p], theme.space, 0)};
`;

export default Box;
