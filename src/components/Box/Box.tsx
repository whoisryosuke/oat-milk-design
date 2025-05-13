import styled from "@emotion/styled";
import { ColorTheme } from "../../themes/colors/dark";
import {
  mrup,
  ThemeTokenKey,
  up,
  UtilityPropResponsive,
} from "../../utils/theme";
import { CSSProperties } from "react";

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  bg?: keyof ColorTheme["colors"];
  color?: keyof ColorTheme["colors"];
  p?: UtilityPropResponsive<"space", "padding">;
  px?: UtilityPropResponsive<"space", "paddingLeft">;
  py?: UtilityPropResponsive<"space", "paddingLeft">;
  pl?: UtilityPropResponsive<"space", "paddingLeft">;
  pr?: UtilityPropResponsive<"space", "paddingLeft">;
  pb?: UtilityPropResponsive<"space", "paddingLeft">;
  pt?: UtilityPropResponsive<"space", "paddingLeft">;
  m?: UtilityPropResponsive<"space", "margin">;
  mx?: UtilityPropResponsive<"space", "marginLeft">;
  my?: UtilityPropResponsive<"space", "marginLeft">;
  ml?: UtilityPropResponsive<"space", "marginLeft">;
  mr?: UtilityPropResponsive<"space", "marginLeft">;
  mb?: UtilityPropResponsive<"space", "marginLeft">;
  mt?: UtilityPropResponsive<"space", "marginLeft">;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  display?: CSSProperties["display"];
  position?: CSSProperties["position"];
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

const Box = styled.div<BoxProps>`
  background-color: ${({ theme, bg }) => up([bg], theme.colors, "inherit")};
  color: ${({ theme, color }) => up([color], theme.colors, "inherit")};

  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  display: ${({ display }) => (display ? display : "block")};
  position: ${({ position }) => (position ? position : "static")};

  justify-content: ${({ justifyContent }) => justifyContent ?? "normal"};
  justify-items: ${({ justifyItems }) => justifyItems ?? "legacy"};
  justify-self: ${({ justifySelf }) => justifySelf ?? "auto"};
  align-content: ${({ alignContent }) => alignContent ?? "normal"};
  align-items: ${({ alignItems }) => alignItems ?? "inherit"};
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

  ${({ theme, ...props }) =>
    mrup(
      [
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
      theme,
      props as Record<string, ThemeTokenKey | object>
    )}
`;
// ${({ theme, m }) => rup("margin", m, theme.space)}
// ${({ theme, p }) => rup("padding", p, theme.space)}

export default Box;
