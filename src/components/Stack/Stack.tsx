import React, { CSSProperties, PropsWithChildren } from "react";
import styled from "styled-components";

type StackContainerProps = {
  flexDirection: CSSProperties["flexDirection"];
  flexWrap: CSSProperties["flexWrap"];
};

const StackContainer = styled("div")<StackContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
`;

type Props = {
  gap?: React.CSSProperties["margin"];
  vertical?: boolean;
  // Flex-wrap, wraps content to next line
  wrap?: boolean;
  // Wrap elements in a `<Box>` component
  wrapper?: boolean;
  style?: CSSProperties;
  responsive?: boolean;
};

const Stack = ({
  gap = "8px",
  vertical = false,
  wrap = false,
  wrapper = false,
  responsive = true,
  style,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  // The CSS for gap between elements
  const gapStyle = {
    marginBottom: vertical || wrap ? gap : 0,
    marginRight: !vertical ? gap : 0,
  };
  // If it's the last child, we still apply some styles depending on the case
  // If we wrap, there's always a marginBottom needed or it'll offset flex
  const defaultGap = {
    marginBottom: { mobile: responsive ? gap : 0, tablet: wrap ? gap : 0 },
  };

  // Loop through children and apply gap (unless it's the last child)
  const childArray = React.Children.toArray(children);
  const spacedChildren = React.Children.map(childArray, (child, index) => {
    if (React.isValidElement(child)) {
      const showGapStyle =
        children && index < childArray.length - 1 ? gapStyle : defaultGap;

      if (wrapper) return <div style={showGapStyle}>{child}</div>;
      return React.cloneElement(child, {
        style: showGapStyle,
      });
    }
    return child;
  });

  const orientation = vertical ? "column" : "row";

  return (
    <StackContainer
      flexDirection={orientation}
      flexWrap={wrap ? "wrap" : "nowrap"}
      style={style}
      {...props}
    >
      {spacedChildren}
    </StackContainer>
  );
};

export default Stack;
