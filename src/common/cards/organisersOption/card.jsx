import CardBoarder from "./cardBoarder";
import { Styles } from "./organisersOptions.css";
import { dimensions } from "../../../constants/dimensions";
const Card = ({ buttonText, iconUrl, cardText }) => {
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
  return (
    <div
      className="tw-mt-4"
      height="auto"
      style={{
        position: "relative",
      }}
    >
      <CardBoarder cwidth={width} cheight={height} />
      <img className="tw-absolute" style={Styles.icon} src={iconUrl} />
      <p className="tw-absolute tw-text-xl" style={Styles.text}>
        {cardText}
      </p>
      <button
        className="tw-absolute tw-font-light tw-px-2 tw-font-bold tw-text-sm tw-py-2 tw-rounded-full tw-text-white"
        style={Styles.button}
      >
        {buttonText}
      </button>
    </div>
  );
};
export default Card;
