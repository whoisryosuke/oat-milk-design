import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const ButtonGroupContainer = styled.div`
  padding: 100px;
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
          // onClick={handleClick}
          active={(currentLabel === label).toString()}
        >
          {label}
        </Button>
      ))}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
