import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";
import { TEXT_STYLES } from "../../../themes/tokens";

const typeKeys = Object.keys(TEXT_STYLES);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Heading",
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: "select",
      options: typeKeys,
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Billboard: Story = {
  args: {
    type: "billboard",
    children: "Billboard Heading",
  },
};
export const H1: Story = {
  args: {
    type: "h1",
    children: "H1 Heading",
  },
};
export const H2: Story = {
  args: {
    type: "h2",
    children: "H2 Heading",
  },
};

export const H3: Story = {
  args: {
    type: "h3",
    children: "H3 Heading",
  },
};

export const H4: Story = {
  args: {
    type: "h4",
    children: "H4 Heading",
  },
};

export const H5: Story = {
  args: {
    type: "h5",
    children: "H5 Heading",
  },
};

export const H6: Story = {
  args: {
    type: "h6",
    children: "H6 Heading",
  },
};
