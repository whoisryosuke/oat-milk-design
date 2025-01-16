import { styled } from "styled-components";
import { ColorTheme } from "../../themes/colors/dark";
import { BaseTheme } from "../../themes/base";
import { up } from "../../utils/theme";
import { CSSProperties } from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  bg?: keyof ColorTheme["colors"];
  color?: keyof ColorTheme["colors"];
  p?: keyof BaseTheme["space"] | CSSProperties["padding"];
  px?: keyof BaseTheme["space"] | CSSProperties["paddingLeft"];
  py?: keyof BaseTheme["space"] | CSSProperties["paddingLeft"];
  pl?: keyof BaseTheme["space"] | CSSProperties["paddingLeft"];
  pr?: keyof BaseTheme["space"] | CSSProperties["paddingLeft"];
  pb?: keyof BaseTheme["space"] | CSSProperties["paddingLeft"];
  pt?: keyof BaseTheme["space"] | CSSProperties["paddingLeft"];
  m?: keyof BaseTheme["space"] | CSSProperties["margin"];
  mx?: keyof BaseTheme["space"] | CSSProperties["marginLeft"];
  my?: keyof BaseTheme["space"] | CSSProperties["marginLeft"];
  ml?: keyof BaseTheme["space"] | CSSProperties["marginLeft"];
  mr?: keyof BaseTheme["space"] | CSSProperties["marginLeft"];
  mb?: keyof BaseTheme["space"] | CSSProperties["marginLeft"];
  mt?: keyof BaseTheme["space"] | CSSProperties["marginLeft"];
  display?: CSSProperties["display"];
  justifyContent?: CSSProperties["justifyContent"];
  justifyItems?: CSSProperties["justifyItems"];
  justifySelf?: CSSProperties["justifySelf"];
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];

  borderStyle?: CSSProperties["borderStyle"];
  borderWidth?: CSSProperties["borderWidth"];
  borderLeftWidth?: CSSProperties["borderLeftWidth"];
  borderRightWidth?: CSSProperties["borderRightWidth"];
  borderTopWidth?: CSSProperties["borderTopWidth"];
  borderBottomWidth?: CSSProperties["borderBottomWidth"];
  borderColor?: keyof ColorTheme["colors"] | CSSProperties["borderColor"];
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

  border-style: ${({ borderStyle }) => borderStyle ?? "none"};
  border-left-width: ${({ theme, borderLeftWidth, borderWidth }) =>
    up([borderLeftWidth, borderWidth], theme.space, "0px")};
  border-right-width: ${({ theme, borderRightWidth, borderWidth }) =>
    up([borderRightWidth, borderWidth], theme.space, "0px")};
  border-top-width: ${({ theme, borderTopWidth, borderWidth }) =>
    up([borderTopWidth, borderWidth], theme.space, "0px")};
  border-bottom-width: ${({ theme, borderBottomWidth, borderWidth }) =>
    up([borderBottomWidth, borderWidth], theme.space, "0px")};
  border-color: ${({ theme, borderColor }) =>
    up([borderColor], theme.colors, "transparent") ?? "none"};
`;

export default Box;
