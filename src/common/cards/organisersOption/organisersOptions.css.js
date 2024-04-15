import { colors } from "../../../constants/colors";
import { dimensions } from "../../../constants/dimensions";
const width = dimensions.organisersOptionsCardDimensions.width;
const height = dimensions.organisersOptionsCardDimensions.height;
const topHeight = 0.1 * height + "px";
const leftWidth = 0.1 * width + "px";
const iconLeft = width * 0.5 - 25 + "px";
const textTop = 0.2 * height + "px";
const textLeft = 0.1 * width + "px";
const textWidth = 0.8 * width + "px";
const buttonLeft = 0.45 * width + "px";
const buttonTop = 0.55 * height + "px";
const buttonWidth = 0.4 * width + "px";
export const Styles = {
  icon: { width: "50px", height: "50px", top: 0, left: iconLeft },
  text: { top: textTop, left: textLeft, width: textWidth },
  button: {
    top: buttonTop,
    left: buttonLeft,
    width: buttonWidth,
    backgroundColor: colors.GREEN_COLOR,
  },
};
