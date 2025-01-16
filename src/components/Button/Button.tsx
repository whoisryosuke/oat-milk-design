import { styled } from "styled-components";
import { BaseTheme } from "../../themes/base";
import { CSSProperties, PropsWithChildren, ReactNode } from "react";
import { up } from "../../utils/theme";
import Text, { TextProps } from "../Text/Text";
import { ColorTheme } from "../../themes/colors/dark";

type StyledProps = React.HTMLProps<HTMLButtonElement> & {
  bg?: keyof ColorTheme["colors"];
  bgHover?: keyof ColorTheme["colors"];
  bgPress?: keyof ColorTheme["colors"];
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

type Props = TextProps &
  StyledProps & {
    icon?: ReactNode;
  };

const StyledButton = styled.button<StyledProps>`
  background-color: ${({ theme, bg }) =>
    up([bg], theme.colors, theme.colors.interactiveBg)};
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

  border: 1.5px solid
    ${({ theme, bgHover }) => up([bgHover], theme.colors, theme.colors.border)};
  text-shadow: ${({ theme }) => theme.shadows.text};

  &:hover {
    border-color: ${({ theme, bgPress }) =>
      up([bgPress], theme.colors, theme.colors.borderHovered)};
    background: ${({ theme, bgHover }) =>
      up([bgHover], theme.colors, theme.colors.interactiveBgHovered)};
  }

  &[data-pressed="true"],
  &:active {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    background: ${({ theme, bgPress }) =>
      up([bgPress], theme.colors, theme.colors.interactiveBgPressed)};
    border-color: ${({ theme, bgPress }) =>
      up([bgPress], theme.colors, theme.colors.borderHovered)};
  }

  &:focus {
    outline: 2px solid
      ${({ theme, bgPress }) =>
        up([bgPress], theme.colors, theme.colors.interactiveBgPressed)};
    outline-offset: -1px;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.borderDisabled};
    background: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabledText};
  }

  & svg {
    margin-right: ${({ theme }) => theme.space[2]};
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    transition-property: box-shadow, color, background, border-color,
      font-weight;
    transition-duration: 420ms;
  }
`;

const Button = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  icon,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <StyledButton {...props}>
      {icon}
      <Text
        as="span"
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
      >
        {children}
      </Text>
    </StyledButton>
  );
};

Button.defaultProps = {
  px: 6,
  py: 3,
  borderRadius: 4,
  fontSize: 2,
  lineHeight: 3,
} as Props;

export default Button;
