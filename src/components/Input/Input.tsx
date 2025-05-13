import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { ColorTheme } from "../../themes/colors/dark";
import { up } from "../../utils/theme";
import { BaseTheme } from "../../themes/base";

type StyledContainer = {
  bgHover?: keyof ColorTheme["colors"];
  borderRadius?: keyof BaseTheme["radius"];

  p?: keyof BaseTheme["space"];
  px?: keyof BaseTheme["space"];
  py?: keyof BaseTheme["space"];
  pl?: keyof BaseTheme["space"];
  pr?: keyof BaseTheme["space"];
  pb?: keyof BaseTheme["space"];
  pt?: keyof BaseTheme["space"];
};

const InputContainer = styled.div<StyledContainer>`
  display: flex;
  border: 1px solid
    ${({ theme, bgHover }) => up([bgHover], theme.colors, theme.colors.border)};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : theme.radius[0]};

  background-color: ${({ theme }) => theme.colors.inputBg};

  padding-left: ${({ theme, p, px, pl }) =>
    up([pl, px, p], theme.space, theme.space[4])};
  padding-right: ${({ theme, p, px, pr }) =>
    up([pr, px, p], theme.space, theme.space[4])};
  padding-top: ${({ theme, p, py, pt }) =>
    up([pt, py, p], theme.space, theme.space[3])};
  padding-bottom: ${({ theme, p, py, pb }) =>
    up([pb, py, p], theme.space, theme.space[3])};

  align-items: center;

  font-family: ${({ theme }) => theme.fonts.body};

  & svg {
    margin-right: ${({ theme }) => theme.space[3]};
    color: ${({ theme }) => theme.colors.text};
  }

  &:has(input:focus) {
    outline: 2px solid ${({ theme }) => theme.colors.focusBg};
  }
`;

type StyledInputProps = {
  icon: boolean;
};
const StyledInput = styled.input<StyledInputProps>`
  border: 0;
  background-color: transparent;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text};

  outline: none;
`;

export type InputProps = React.HTMLProps<HTMLInputElement> &
  StyledContainer &
  Omit<StyledInputProps, "icon"> & {
    icon?: ReactNode;
  };

const Input = ({
  icon,
  borderRadius,
  p,
  px,
  py,
  pl,
  pr,
  pt,
  pb,
  ...props
}: InputProps) => {
  const hasIcon = icon !== undefined;
  return (
    <InputContainer
      borderRadius={borderRadius}
      p={p}
      px={px}
      py={py}
      pl={pl}
      pr={pr}
      pt={pt}
      pb={pb}
    >
      {icon}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <StyledInput icon={hasIcon} {...props}></StyledInput>
    </InputContainer>
  );
};

export default Input;
