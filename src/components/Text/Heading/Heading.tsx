import { PropsWithChildren } from "react";
import Text, { TextProps } from "../Text";
import { TEXT_STYLES } from "../../../themes/tokens";

type TextStyles = keyof typeof TEXT_STYLES;
type Props = TextProps & {
  type: TextStyles;
};

const Heading = ({ type = "h1", ...props }: PropsWithChildren<Props>) => {
  return <Text fontSize={TEXT_STYLES[type]} lineHeight="1.5rem" {...props} />;
};

export default Heading;
