import { ComponentProps, useCallback, useEffect, useRef } from "react";
import { BASE_COLORS, ThemeColors } from "../../themes/colors/base";
import map from "../../utils/map";
import styled from "@emotion/styled";
import { useThemeStore } from "../../store/app";

const StyledCanvas = styled.canvas`
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius[0]};
`;

// Assuming numbers are 0-1
type GraphData = number[];

type Props = ComponentProps<"canvas"> & {
  data: GraphData;
  color?: ThemeColors;
};

const LineGraph = ({ data = [], color = "blue", ...props }: Props) => {
  const { theme } = useThemeStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(
    (currentTheme: typeof theme) => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      // Clear drawing
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle =
        currentTheme == "dark" ? BASE_COLORS["gray-9"] : BASE_COLORS["gray-1"];
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = BASE_COLORS[`${color}-5`];
      for (let i = 0; i < canvasWidth; i++) {
        const index = Math.floor(map(i, 0, canvasWidth, 0, data.length));
        const x = i;
        const y = (data[index] * canvasHeight) / 2 + canvasHeight / 4;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      // this.animationFrameRef = requestAnimationFrame(this.draw.bind(this));
    },
    [data]
  );

  useEffect(() => {
    draw(theme);
  }, [draw, theme]);

  return <StyledCanvas ref={canvasRef} {...props} />;
};

export default LineGraph;
