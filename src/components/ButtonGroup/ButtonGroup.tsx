import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import styled from "@emotion/styled";
import Button from "../Button/Button";

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;

  & button {
    border-radius: 0;
    border-right: 0;
  }
  & button:first-child {
    border-top-left-radius: ${({ theme }) => theme.radius[0]};
    border-bottom-left-radius: ${({ theme }) => theme.radius[0]};
  }
  & button:last-child {
    border-right: 1.5px solid;
    border-top-right-radius: ${({ theme }) => theme.radius[0]};
    border-bottom-right-radius: ${({ theme }) => theme.radius[0]};
  }
`;

type Props = {
  labels: string[];
  currentLabel: string;
  setCurrentLabel: Dispatch<string>;
};

const ButtonGroup = ({
  labels,
  currentLabel,
  setCurrentLabel,
  ...props
}: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentLabel(e.currentTarget.name);
  };

  return (
    <ButtonGroupContainer {...props}>
      {labels.map((label) => (
        <Button
          key={label}
          name={label}
          // @ts-ignore - Something must be up with Styled Components
          onClick={handleClick}
          data-pressed={currentLabel == label}
          px={3}
          py={2}
        >
          {label}
        </Button>
      ))}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
