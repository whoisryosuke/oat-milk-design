import { styled } from "styled-components";
import { BaseTheme } from "../../themes/base";
import { CSSProperties } from "react";
import { up } from "../../utils/theme";

type Props = {
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
  borderRadius?: keyof BaseTheme["radius"];
  display?: CSSProperties["display"];
  justifyContent?: CSSProperties["justifyContent"];
  justifyItems?: CSSProperties["justifyItems"];
  justifySelf?: CSSProperties["justifySelf"];
  alignContent?: CSSProperties["alignContent"];
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
};

const Button = styled.button<Props>`
  background: ${({ theme }) => theme.colors.interactiveBg};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : 0};

  padding-left: ${({ theme, p, px, pl }) => up([pl, px, p], theme.space, 0)};
  padding-right: ${({ theme, p, px, pr }) => up([pr, px, p], theme.space, 0)};
  padding-top: ${({ theme, p, py, pt }) => up([pt, py, p], theme.space, 0)};
  padding-bottom: ${({ theme, p, py, pb }) => up([pb, py, p], theme.space, 0)};

  margin-left: ${({ theme, m, mx, ml }) => up([ml, mx, m], theme.space, 0)};
  margin-right: ${({ theme, m, mx, mr }) => up([mr, mx, m], theme.space, 0)};
  margin-top: ${({ theme, m, my, mt }) => up([mt, my, m], theme.space, 0)};
  margin-bottom: ${({ theme, m, my, mb }) => up([mb, my, m], theme.space, 0)};

  display: ${({ display }) => (display ? display : "flex")};

  justify-content: ${({ justifyContent }) => justifyContent ?? "normal"};
  justify-items: ${({ justifyItems }) => justifyItems ?? "legacy"};
  justify-self: ${({ justifySelf }) => justifySelf ?? "auto"};
  align-content: ${({ alignContent }) => alignContent ?? "normal"};
  align-items: ${({ alignItems }) => alignItems ?? "legacy"};
  align-self: ${({ alignSelf }) => alignSelf ?? "auto"};

  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes["1"]};
  line-height: ${({ theme }) => theme.fontSizes["2"]};

  border: 2.5px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: ${({ theme }) => theme.space[5]};
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHovered};
    background: ${({ theme }) => theme.colors.interactiveBgHovered};
    box-shadow: ${({ theme }) => theme.shadows.hovered};
  }

  &[data-pressed="true"],
  &:active {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background: ${({ theme }) => theme.colors.interactiveBgPressed};
    border-color: ${({ theme }) => theme.colors.borderHovered};
    box-shadow: ${({ theme }) => theme.shadows.hovered};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.interactiveBgPressed};
    outline-offset: -1px;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.disabled};
    background: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.text};
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: box-shadow, color, background, border-color,
      font-weight;
    transition-duration: 420ms;
  }
`;

Button.defaultProps = {
  px: 6,
  py: 3,
  borderRadius: 2,
};

export default Button;
