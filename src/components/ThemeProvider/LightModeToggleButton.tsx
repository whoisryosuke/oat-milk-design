import { useThemeStore } from "../../store/app";
import Button from "../Button/Button";

const LightModeToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();
  return <Button onClick={toggleTheme}>{theme} mode</Button>;
};

export default LightModeToggleButton;
