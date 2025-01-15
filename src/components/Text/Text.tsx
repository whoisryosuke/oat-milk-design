import { styled } from "styled-components";
import { ColorTheme } from "../../themes/colors/dark";
import { BaseTheme } from "../../themes/base";
import { up } from "../../utils/theme";
import { CSSProperties } from "react";
import { TEXT_STYLES } from "../../themes/tokens";

export type TextProps = {
  color?: keyof ColorTheme["colors"];
  fontFamily?: keyof BaseTheme["fonts"] | CSSProperties["fontFamily"];
  fontSize?: keyof BaseTheme["fontSizes"] | CSSProperties["fontSize"];
  fontWeight?: keyof BaseTheme["fontWeights"] | CSSProperties["fontWeight"];
  lineHeight?: keyof BaseTheme["lineHeights"] | CSSProperties["lineHeight"];
  display?: CSSProperties["display"];
};

const Text = styled.div<TextProps>`
  color: ${({ theme, color }) => up([color], theme.colors, "inherit")};

  font-family: ${({ theme, fontFamily }) =>
    up([fontFamily], theme.fonts, "sans-serif")};
  font-size: ${({ theme, fontSize }) =>
    up([fontSize], theme.fontSizes, "1rem")};
  font-weight: ${({ theme, fontWeight }) =>
    up([fontWeight], theme.fontWeights, "normal")};
  line-height: ${({ theme, lineHeight }) =>
    up([lineHeight], theme.lineHeights, "1.5rem")};

  display: ${({ display }) => (display ? display : "block")};
`;

Text.defaultProps = {
  fontFamily: "body",
  fontSize: 3,
};

export default Text;
