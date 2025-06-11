import {
  Slider as AriaSlider,
  Label as AriaLabel,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
} from "react-aria-components";
import styled from "@emotion/styled";
import InputLabel from "../Input/InputLabel";

const SLIDER_THUMB_WIDTH_CLOSED = 6;
const SLIDER_THUMB_WIDTH_OPEN = 20;
const SLIDER_TRACK_HEIGHT = 14;
const SLIDER_PROGRESS_PADDING = 3;
const SLIDER_PROGRESS_HEIGHT =
  SLIDER_TRACK_HEIGHT - SLIDER_PROGRESS_PADDING * 2;

const SliderBase = styled(AriaSlider)`
  display: grid;
  grid-template-areas:
    "label output"
    "track track";
  grid-template-columns: 1fr auto;
  color: ${({ theme }) => theme.colors.text};

  &[data-orientation="horizontal"] {
    flex-direction: column;
  }

  &[data-orientation="vertical"] {
    height: 150px;
    display: block;
  }
`;

const Label = styled(AriaLabel)`
  grid-area: label;
  color: ${({ theme }) => theme.colors.text};

  &[data-orientation="vertical"] {
    display: none;
  }
`;

const SliderOutput = styled(AriaSliderOutput)`
  grid-area: output;
  color: ${({ theme }) => theme.colors.text};

  &[data-orientation="vertical"] {
    display: none;
  }
`;

const SliderThumb = styled(AriaSliderThumb)`
  width: ${SLIDER_THUMB_WIDTH_CLOSED}px;
  height: 25px;
  forced-color-adjust: none;
  position: absolute;
  top: 50%;

  background: transparent;

  &[data-orientation="horizontal"] {
    top: 50%;
  }
  &[data-orientation="vertical"] {
    left: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${SLIDER_THUMB_WIDTH_CLOSED}px;
    height: 25px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius[0]};
    background: ${({ theme }) => theme.colors.inputBg};

    transition:
      width 210ms ease-out,
      transform 210ms ease-out;
  }
  &:hover:after {
    background: ${({ theme }) => theme.colors.interactiveBgHovered};

    width: ${SLIDER_THUMB_WIDTH_OPEN}px;
    transform: translateX(
      -${(SLIDER_THUMB_WIDTH_CLOSED - SLIDER_THUMB_WIDTH_OPEN) / 2}px
    );
  }
  &[data-dragging]:after {
    background: ${({ theme }) => theme.colors.interactiveBgPressed};
  }
  &:hover {
    width: 23px;
  }

  transition: width 210ms ease-out;
`;

const SliderProgress = styled("div")`
  position: absolute;
  height: ${SLIDER_PROGRESS_HEIGHT}px;
  margin: ${SLIDER_PROGRESS_PADDING}px;

  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.radius[1]};
`;

const SliderTrack = styled(AriaSliderTrack)`
  grid-area: track;
  position: relative;
  /* track line */
  &:before {
    content: "";
    display: block;
    position: absolute;
    background: var(--border-color);

    background: ${({ theme }) => theme.colors.inputBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius[0]};
  }

  &[data-orientation="horizontal"] {
    height: ${SLIDER_TRACK_HEIGHT}px;
    width: 100%;

    &:before {
      height: ${SLIDER_TRACK_HEIGHT}px;
      width: 100%;
    }
  }

  &[data-orientation="vertical"] {
    width: 30px;
    height: 100%;

    &:before {
      width: 14px;
      height: 100%;
    }
  }
`;

type Props = typeof AriaSlider & {
  label?: string;
  showOutput?: boolean;
  value: number;
};

const Slider = ({ label, showOutput, ...props }: Props) => {
  return (
    <SliderBase {...props}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/* @ts-ignore */}
      {label && <InputLabel as={Label}>{label}</InputLabel>}
      {showOutput && <SliderOutput />}
      <SliderTrack>
        {({ state }) => (
          <>
            <SliderProgress
              style={{ width: state.getThumbPercent(0) * 100 + "%" }}
            />
            <SliderThumb />
          </>
        )}
      </SliderTrack>
    </SliderBase>
  );
};

Slider.defaultProps = {
  showOutput: false,
};

export default Slider;
