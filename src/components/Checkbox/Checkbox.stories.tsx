import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Checkbox from "./Checkbox";
import { BiGame } from "react-icons/bi";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    label: "3D Mode",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return <Checkbox label="3D Mode" checked={checked} setChecked={setChecked} />;
};

export const Secondary: Story = {
  render: () => (
    <>
      <ControlledCheckbox />
    </>
  ),
};
