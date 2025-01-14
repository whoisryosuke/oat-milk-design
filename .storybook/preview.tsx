import React from "react";
import type { Preview } from "@storybook/react";
import AppWrapper from "../src/components/AppWrapper";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => (
      <AppWrapper>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </AppWrapper>
    ),
  ],
};

export default preview;
