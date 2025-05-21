import React from "react";
import type { Preview } from "@storybook/react";
import AppWrapper from "../src/components/AppWrapper";
import Box from "../src/components/Box/Box";
import LightModeToggleButton from "../src/components/ThemeProvider/LightModeToggleButton";

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
        <Box position="absolute" style={{ right: 0, top: 0, zIndex: 710 }}>
          <LightModeToggleButton />
        </Box>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Box
          bg="background"
          color="text"
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ inset: 0 }}
        >
          <Story />
        </Box>
      </AppWrapper>
    ),
  ],
};

export default preview;
