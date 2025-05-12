import React, { CSSProperties, PropsWithChildren } from "react";
import styled from "styled-components";
import Box from "../Box/Box";

type StackContainerProps = {
  flexDirection: CSSProperties["flexDirection"];
  flexWrap: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
};

const StackContainer = styled(Box)<StackContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
`;

type Props = {
  gap?: CSSProperties["gap"];
  vertical?: boolean;
  // Flex-wrap, wraps content to next line
  wrap?: boolean;
  // Wrap elements in a `<Box>` component
  wrapper?: boolean;
  style?: CSSProperties;
  responsive?: boolean;
};

const Stack = ({
  vertical = false,
  wrap = false,
  // responsive = true,
  style,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const orientation = vertical ? "column" : "row";

  return (
    <StackContainer
      flexDirection={orientation}
      flexWrap={wrap ? "wrap" : "nowrap"}
      style={style}
      {...props}
    >
      {children}
    </StackContainer>
  );
};

export default Stack;
