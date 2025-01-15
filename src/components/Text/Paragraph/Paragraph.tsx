import { PropsWithChildren } from "react";
import Text, { TextProps } from "../Text";
import { TEXT_STYLES } from "../../../themes/tokens";

type Props = TextProps;

const Paragraph = ({ ...props }: PropsWithChildren<Props>) => {
  return <Text fontSize={TEXT_STYLES["p"]} lineHeight="1.5rem" {...props} />;
};

export default Paragraph;
