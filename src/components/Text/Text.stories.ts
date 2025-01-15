import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Text from "./Text";
import generateDarkTheme from "../../themes/colors/dark";
import { base } from "../../themes";

const referenceTheme = generateDarkTheme("cyan");
const colorsKeys = Object.keys(referenceTheme.colors);
const fontSizesKeys = Object.keys(base.fontSizes);
const fontWeightsKeys = Object.keys(base.fontWeights);
const fontsKeys = Object.keys(base.fonts);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Text",
  component: Text,
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
      options: colorsKeys,
    },
    fontSize: {
      control: "select",
      options: fontSizesKeys,
    },
    fontWeight: {
      control: "select",
      options: fontWeightsKeys,
    },
    fontFamily: {
      control: "select",
      options: fontsKeys,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FontWeights: Story = {
  args: {
    fontWeight: "bold",
    children: "Text",
  },
};

export const FontSize: Story = {
  args: {
    fontSize: 8,
    children: "Text",
  },
};
