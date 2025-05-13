import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import generateDarkTheme from "../../themes/colors/dark";
import { base } from "../../themes";
import LineGraph from "./LineGraph";
import { THEME_COLORS } from "../../themes/colors/base";
import { BiGame } from "react-icons/bi";
import Box from "../Box/Box";
import Text from "../Text/Text";

const referenceTheme = generateDarkTheme("cyan");
const colorKeys = Object.keys(referenceTheme.colors);
const spaceKeys = Object.keys(base.space);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/LineGraph",
  component: LineGraph,
  //   subcomponents: [Box, Text],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof LineGraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// Bigger = less detail
const DETAIL = 16;
const MOCK_DATA = new Array(1024 / DETAIL).fill(0).map(() => Math.random());

export const Value: Story = {
  args: {
    data: MOCK_DATA,
    width: "500px",
  },
};

export const Color: Story = {
  args: {
    data: MOCK_DATA,
    color: "green",
    width: "500px",
  },
};
