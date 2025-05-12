import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { base } from "../../../themes";
import InputWithLabel from "../../Input/InputWithLabel";
import { BiGame } from "react-icons/bi";
import generateDarkTheme from "../../../themes/colors/dark";
import Box from "../../Box/Box";
import Stack from "../../Stack/Stack";
import Slider from "../../Slider/Slider";

const referenceTheme = generateDarkTheme("cyan");
const colorKeys = Object.keys(referenceTheme.colors);
const spaceKeys = Object.keys(base.space);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Composition/Input",
  parameters: {
    component: InputWithLabel,
    subcomponents: { Stack },
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof InputWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Value: Story = {
  render: (args) => (
    <Stack vertical gap="16px">
      <InputWithLabel label="Label" placeholder="Type something..." />
      <InputWithLabel label="Label" placeholder="Type something..." />
      <Slider label="Label" />
    </Stack>
  ),
};
