import { PropsWithChildren } from "react";
import Text, { TextProps } from "../Text";
import { TEXT_STYLES } from "../../../themes/tokens";

type TextStyles = keyof typeof TEXT_STYLES;
type Props = TextProps & {
  type: TextStyles;
};

const Heading = ({ type = "h1", ...props }: PropsWithChildren<Props>) => {
  const element = type == "billboard" ? "h1" : type;
  return (
    <Text
      as={element}
      fontSize={`${TEXT_STYLES[type]}px`}
      lineHeight={`${TEXT_STYLES[type] * 1.5}px`}
      {...props}
    />
  );
};

export default Heading;
