import React from "react";
import Text, { TextProps } from "../Text/Text";

type Props = TextProps;

const InputLabel = (props: Props) => {
  return <Text as="label" for={name} mb={2} color="text" {...props} />;
};

export default InputLabel;
