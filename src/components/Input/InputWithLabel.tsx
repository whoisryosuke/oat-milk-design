import React from "react";
import Input, { InputProps } from "./Input";
import Text from "../Text/Text";
import Stack from "../Stack/Stack";

type Props = InputProps & {
  label: string;
};

const InputWithLabel = ({ label, name, ...props }: Props) => {
  return (
    <Stack vertical>
      <Text as="label" for={name} mb={2}>
        {label}
      </Text>
      <Input name={name} px={2} py={2} {...props} />
    </Stack>
  );
};

export default InputWithLabel;
