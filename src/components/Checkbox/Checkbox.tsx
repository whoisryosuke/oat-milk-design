import React, { ChangeEvent, Dispatch, MouseEvent } from "react";
import Box from "../Box/Box";
import InputLabel from "../Input/InputLabel";
import styled from "@emotion/styled";
import Stack from "../Stack/Stack";
import { BiCheck } from "react-icons/bi";

const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.space[3]};

  &:hover .CheckboxBox {
    background-color: ${({ theme }) => theme.colors.interactiveBgHovered};
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
`;

type CheckboxBoxProps = {
  ["data-checked"]: string;
};

const CheckboxBox = styled.div<CheckboxBoxProps>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius[0]};

  background-color: ${({ theme }) => theme.colors.inputBg};

  &:has(input:focus) {
    outline: 2px solid ${({ theme }) => theme.colors.focusBg};
  }

  & svg {
    color: ${({ theme }) => theme.colors["gray-0"]};
    opacity: 0;
    transform: translateY(5px);
    transition-property: opacity, transform;
    transition-duration: 220ms;
    transition-timing-function: ease-in;
  }

  &[data-checked="true"] svg {
    opacity: 1;
    transform: translateY(0);
  }

  &[data-checked="true"] {
    background-color: ${({ theme }) => theme.colors.interactiveBgSelected};
  }
`;

type Props = {
  label: string;
  checked: boolean;
  setChecked: Dispatch<boolean>;
};

const Checkbox = ({ label, checked, setChecked, ...props }: Props) => {
  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    console.log("checked?", e.currentTarget.checked);
    setChecked(e.currentTarget.checked);
  };
  return (
    <CheckboxContainer {...props}>
      <CheckboxBox className="CheckboxBox" data-checked={checked.toString()}>
        <BiCheck size={20} />
      </CheckboxBox>
      <CheckboxInput type="checkbox" onClick={handleClick} />
      <InputLabel>{label}</InputLabel>
    </CheckboxContainer>
  );
};
export default Checkbox;
