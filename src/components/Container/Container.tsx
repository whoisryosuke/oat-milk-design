import { PropsWithChildren } from "react";
import Box, { BoxProps } from "../Box/Box";

type Props = BoxProps;

// TODO: Add standard responsive container sizes (mobile, tablet, etc) and center it
const Container = (props: PropsWithChildren<Props>) => {
  return <Box color="text" {...props} />;
};

export default Container;
