import styled from "@emotion/styled";
import { ChangeEvent, Dispatch } from "react";
import Box from "../../../src/components/Box/Box";
import { up } from "../../utils/theme";
import { BaseTheme } from "../../themes/base";

type StyledSelectProps = {
  p?: keyof BaseTheme["space"];
  px?: keyof BaseTheme["space"];
  py?: keyof BaseTheme["space"];
  pl?: keyof BaseTheme["space"];
  pr?: keyof BaseTheme["space"];
  pb?: keyof BaseTheme["space"];
  pt?: keyof BaseTheme["space"];
};

const StyledSelect = styled.select<StyledSelectProps>`
  color: ${({ theme }) => theme.colors.interactiveText};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius[0]};

  background-color: ${({ theme }) => theme.colors.interactiveBg};

  & option {
    background-color: ${({ theme }) => theme.colors.inputBg};
    border-radius: 0;
  }

  padding-left: ${({ theme, p, px, pl }) =>
    up([pl, px, p], theme.space, theme.space[4])};
  padding-right: ${({ theme, p, px, pr }) =>
    up([pr, px, p], theme.space, theme.space[4])};
  padding-top: ${({ theme, p, py, pt }) =>
    up([pt, py, p], theme.space, theme.space[3])};
  padding-bottom: ${({ theme, p, py, pb }) =>
    up([pb, py, p], theme.space, theme.space[3])};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHovered};
    background: ${({ theme }) => theme.colors.interactiveBgHovered};
  }
  & option:hover {
    background-color: ${({ theme }) => theme.colors.interactiveBgPressed};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.focusBg};
    outline-offset: -1px;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.borderDisabled};
    background: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.disabledText};
  }
`;

export type OptionItem = {
  value: string;
  name: string;
};

type Props = {
  options: OptionItem[];
  value: string;
  setSelected: Dispatch<string>;
};

const Select = ({ options, value, setSelected, ...props }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.currentTarget.value);
  };

  return (
    <Box {...props}>
      <StyledSelect value={value} onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default Select;
