import Input, { InputProps } from "./Input";
import Stack from "../Stack/Stack";
import InputLabel from "./InputLabel";

type Props = InputProps & {
  label: string;
};

const InputWithLabel = ({ label, name, ...props }: Props) => {
  return (
    <Stack vertical>
      <InputLabel>{label}</InputLabel>
      <Input name={name} px={2} py={2} {...props} />
    </Stack>
  );
};

export default InputWithLabel;
