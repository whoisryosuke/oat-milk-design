import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import generateDarkTheme from "../../themes/colors/dark";
import { base } from "../../themes";
import Tabs from "./Tabs";
import { THEME_COLORS } from "../../themes/colors/base";
import { BiGame } from "react-icons/bi";
import Box from "../Box/Box";
import Text from "../Text/Text";

const referenceTheme = generateDarkTheme("cyan");
const colorKeys = Object.keys(referenceTheme.colors);
const spaceKeys = Object.keys(base.space);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Tabs",
  component: Tabs,
  subcomponents: [Box, Text],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_TABS = [
  {
    name: "2D",
    content: (
      <Box>
        <Text color="text">2D</Text>
      </Box>
    ),
  },
  {
    name: "3D",
    content: (
      <Box>
        <Text color="text">3D</Text>
      </Box>
    ),
  },
];

export const Value: Story = {
  args: {
    tabs: [],
    width: "500px",
  },
};
