import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import generateDarkTheme from "../../themes/colors/dark";
import { base } from "../../themes";
import Input from "./Input";
import { THEME_COLORS } from "../../themes/colors/base";
import { BiGame } from "react-icons/bi";

const referenceTheme = generateDarkTheme("cyan");
const colorKeys = Object.keys(referenceTheme.colors);
const spaceKeys = Object.keys(base.space);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: {
    placeholder: "your.email@company.com",
  },
};
export const Value: Story = {
  args: {
    value: "Test value",
  },
};
export const Icon: Story = {
  args: {
    icon: <BiGame size="20px" />,
    value: "Test value",
  },
};
