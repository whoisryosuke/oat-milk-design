import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Box from "./Box";
import generateDarkTheme from "../../themes/colors/dark";
import { base } from "../../themes";

const referenceTheme = generateDarkTheme("cyan");
const colorKeys = Object.keys(referenceTheme.colors);
const spaceKeys = Object.keys(base.space);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Box",
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    bg: {
      control: "select",
      options: colorKeys,
    },
    p: {
      control: "select",
      options: spaceKeys,
    },
    px: {
      control: "select",
      options: spaceKeys,
    },
    py: {
      control: "select",
      options: spaceKeys,
    },
    pl: {
      control: "select",
      options: spaceKeys,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Padded: Story = {
  args: {
    p: 3,
    bg: "blue-4",
    children: "Box",
  },
};

export const BackgroundColor: Story = {
  args: {
    bg: "blue-4",
    children: "Box",
  },
};

export const Flex: Story = {
  args: {
    px: 6,
    bg: "blue-4",
    display: "flex",
    justifyItems: "center",
    children: "Box",
  },
};
