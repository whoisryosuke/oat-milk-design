import { BASE_COLORS, ThemeColors } from "./base";

const shadows = {
  default: `0px 2px 8.4px rgba(0, 0, 0, 0.5),
    0px 0px 16.4px rgba(255, 255, 255, 0.1),
    inset 0px 3px 2px rgba(255, 255, 255, 0.25),
    inset 0px -8px 3px rgba(0, 0, 0, 0.25)`,
  hovered: `0px 2px 8.4px rgba(0, 0, 0, 0.5),
      0px 0px 16.4px rgba(255, 255, 255, 0.1),
      inset 0px 3px 2px rgba(255, 255, 255, 0.25),
      inset 0px -8px 3px rgba(0, 0, 0, 0.25)`,
  pressed: `0px 2px 8.4px rgba(0, 0, 0, 0.5),
      0px 0px 16.4px rgba(153, 233, 242, 0.5),
      inset 0px -3px 2px rgba(255, 255, 255, 0.25),
      inset 0px 8px 3px rgba(0, 0, 0, 0.25)`,
  text: `1px 1px 2px rgba(0, 0, 0, 0.2)`,
};

export const generateDarkTheme = (color: ThemeColors) => ({
  colors: {
    text: BASE_COLORS["gray-0"],
    disabled: BASE_COLORS["gray-4"],
    disabledText: BASE_COLORS["gray-3"],

    background: BASE_COLORS["gray-9"],
    icon: BASE_COLORS["gray-5"],

    border: BASE_COLORS["gray-6"],
    borderHovered: BASE_COLORS[`${color}-7`],
    borderDisabled: BASE_COLORS["gray-5"],

    interactiveBg: BASE_COLORS[`gray-8`],
    interactiveBgHovered: BASE_COLORS[`${color}-5`],
    interactiveBgPressed: BASE_COLORS[`${color}-6`],

    inputBg: BASE_COLORS["gray-9"],

    ...BASE_COLORS,
  },

  gradients: {
    primary: `linear-gradient(90deg, ${BASE_COLORS[`${color}-2`]} 0%, ${
      BASE_COLORS[`${color}-4`]
    } 100%)`,
    button: `linear-gradient(180deg, ${BASE_COLORS[`${color}-7`]} 42.5%, ${
      BASE_COLORS[`${color}-8`]
    } 100%)`,
  },

  shadows: shadows,
});

export type ColorTheme = ReturnType<typeof generateDarkTheme>;

export default generateDarkTheme;
