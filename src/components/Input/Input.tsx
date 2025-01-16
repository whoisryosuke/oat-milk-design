import React, { ReactNode } from "react";
import { styled } from "styled-components";
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
  border: 1.5px solid
    ${({ theme, bgHover }) => up([bgHover], theme.colors, theme.colors.border)};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.radius[borderRadius] : 0};

  padding-left: ${({ theme, p, px, pl }) => up([pl, px, p], theme.space, 0)};
  padding-right: ${({ theme, p, px, pr }) => up([pr, px, p], theme.space, 0)};
  padding-top: ${({ theme, p, py, pt }) => up([pt, py, p], theme.space, 0)};
  padding-bottom: ${({ theme, p, py, pb }) => up([pb, py, p], theme.space, 0)};

  align-items: center;

  & svg {
    margin-right: ${({ theme }) => theme.space[3]};
  }
`;

type StyledInputProps = {
  icon: boolean;
};
const StyledInput = styled.input<StyledInputProps>`
  border: 0;
  background-color: transparent;
`;

type Props = React.HTMLProps<HTMLInputElement> &
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
}: Props) => {
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
      <StyledInput icon={hasIcon} {...props}></StyledInput>
    </InputContainer>
  );
};

Input.defaultProps = {
  px: 5,
  py: 3,
  borderRadius: 4,
};

export default Input;
