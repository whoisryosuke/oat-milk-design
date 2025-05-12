import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import generateDarkTheme from "../../themes/colors/dark";
import { base } from "../../themes";
import Select from "./Select";
import { THEME_COLORS } from "../../themes/colors/base";
import { BiGame } from "react-icons/bi";

const referenceTheme = generateDarkTheme("cyan");
const colorKeys = Object.keys(referenceTheme.colors);
const spaceKeys = Object.keys(base.space);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Input/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_OPTIONS = ["2D", "3D", "4D"].map((option) => ({
  value: option,
  name: option,
}));

export const Value: Story = {
  args: {
    options: MOCK_OPTIONS,
    value: MOCK_OPTIONS[1].value,
    setSelected: () => {},
  },
};
