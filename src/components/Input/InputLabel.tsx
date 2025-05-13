import { PropsWithChildren } from "react";
import Text, { TextProps } from "../Text/Text";

type Props = TextProps;

const InputLabel = (props: PropsWithChildren<Props>) => {
  return <Text as="label" fontSize={1} color="text" {...props} />;
};

export default InputLabel;
