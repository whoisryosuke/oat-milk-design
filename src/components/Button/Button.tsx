import { styled } from "styled-components";

// type Props = {};

const Button = styled.button`
  background: ${({ theme }) => theme.colors.button.bg.default};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius[2]};
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[4]};
  padding-right: ${({ theme }) => theme.space[4]};
`;

export default Button;
