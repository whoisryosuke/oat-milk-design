import React from "react";
import { useAppStore } from "../../store/app";
import Button from "../Button/Button";

type Props = {};

const LightModeToggleButton = (props: Props) => {
  const { theme, toggleTheme } = useAppStore();
  return <Button onClick={toggleTheme}>{theme} mode</Button>;
};

export default LightModeToggleButton;
