import { Dispatch, MouseEvent } from "react";
import styled from "@emotion/styled";
import Button from "../Button/Button";
import Stack from "../Stack/Stack";
import InputLabel from "../Input/InputLabel";

const ButtonGroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  & button {
    flex: 1;
    border-radius: 0;
    border-right: 0;
    justify-content: center;
  }
  & button:first-child {
    border-top-left-radius: ${({ theme }) => theme.radius[0]};
    border-bottom-left-radius: ${({ theme }) => theme.radius[0]};
  }
  & button:last-child {
    border-right: 1.5px solid ${({ theme }) => theme.colors.border};
    border-top-right-radius: ${({ theme }) => theme.radius[0]};
    border-bottom-right-radius: ${({ theme }) => theme.radius[0]};
  }
`;

type Props = {
  label?: string;
  buttons: string[];
  currentButton: string;
  setCurrentButton: Dispatch<string>;
};

const ButtonGroup = ({
  label,
  buttons,
  currentButton,
  setCurrentButton,
  ...props
}: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentButton(e.currentTarget.name);
  };

  return (
    <Stack vertical>
      {label && <InputLabel>{label}</InputLabel>}
      <ButtonGroupContainer {...props}>
        {buttons.map((label) => (
          <Button
            key={label}
            name={label}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore - Doesn't matter
            onClick={handleClick}
            data-pressed={currentButton == label}
            px={3}
            py={2}
          >
            {label}
          </Button>
        ))}
      </ButtonGroupContainer>
    </Stack>
  );
};

export default ButtonGroup;
