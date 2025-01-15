import { styled } from "styled-components";
import { ColorTheme } from "../../themes/colors/dark";
import { BaseTheme } from "../../themes/base";
import { up } from "../../utils/theme";
import { CSSProperties } from "react";

type Props = {
  bg?: keyof ColorTheme["colors"];
  color?: keyof ColorTheme["colors"];
  p?: keyof BaseTheme["space"];
  px?: keyof BaseTheme["space"];
  py?: keyof BaseTheme["space"];
  pl?: keyof BaseTheme["space"];
  pr?: keyof BaseTheme["space"];
  pb?: keyof BaseTheme["space"];
  pt?: keyof BaseTheme["space"];
  m?: keyof BaseTheme["space"];
  mx?: keyof BaseTheme["space"];
  my?: keyof BaseTheme["space"];
  ml?: keyof BaseTheme["space"];
  mr?: keyof BaseTheme["space"];
  mb?: keyof BaseTheme["space"];
  mt?: keyof BaseTheme["space"];
  display?: CSSProperties["display"];
  justifyContent?: CSSProperties["justifyContent"];
  justifyItems?: CSSProperties["justifyItems"];
  justifySelf?: CSSProperties["justifySelf"];
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
};

const Box = styled.div<Props>`
  background-color: ${({ theme, bg }) => up([bg], theme.colors, "inherit")};
  color: ${({ theme, color }) => up([color], theme.colors, "inherit")};

  padding-left: ${({ theme, p, px, pl }) => up([pl, px, p], theme.space, 0)};
  padding-right: ${({ theme, p, px, pr }) => up([pr, px, p], theme.space, 0)};
  padding-top: ${({ theme, p, py, pt }) => up([pt, py, p], theme.space, 0)};
  padding-bottom: ${({ theme, p, py, pb }) => up([pb, py, p], theme.space, 0)};

  margin-left: ${({ theme, m, mx, ml }) => up([ml, mx, m], theme.space, 0)};
  margin-right: ${({ theme, m, mx, mr }) => up([mr, mx, m], theme.space, 0)};
  margin-top: ${({ theme, m, my, mt }) => up([mt, my, m], theme.space, 0)};
  margin-bottom: ${({ theme, m, my, mb }) => up([mb, my, m], theme.space, 0)};

  display: ${({ display }) => (display ? display : "block")};

  justify-content: ${({ justifyContent }) => justifyContent ?? "normal"};
  justify-items: ${({ justifyItems }) => justifyItems ?? "legacy"};
  justify-self: ${({ justifySelf }) => justifySelf ?? "auto"};
  align-content: ${({ alignContent }) => alignContent ?? "normal"};
  align-items: ${({ alignItems }) => alignItems ?? "legacy"};
  align-self: ${({ alignSelf }) => alignSelf ?? "auto"};
`;

export default Box;
