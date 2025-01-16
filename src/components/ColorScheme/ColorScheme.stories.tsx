import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import ColorScheme from "./ColorScheme";
import generateDarkTheme from "../../themes/colors/dark";
import { base } from "../../themes";
import Button from "../Button/Button";
import { THEME_COLORS } from "../../themes/colors/base";

const referenceTheme = generateDarkTheme("cyan");
const colorKeys = Object.keys(referenceTheme.colors);
const spaceKeys = Object.keys(base.space);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ColorScheme",
  component: ColorScheme,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: "select",
      options: THEME_COLORS,
    },
  },
} satisfies Meta<typeof ColorScheme>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StyledButton: Story = {
  args: {
    color: "grape",
    children: <Button>Buy now</Button>,
  },
};
