import { colors } from "../../../constants/colors";
const ShortCutCard = ({ cardText, iconUrl }) => {
  return (
    <>
      <div
        className="tw-h-1/4 tw-rounded-full tw-w-full tw-flex tw-align-center tw-flex-col tw-justify-center"
        style={{ backgroundColor: colors.GREEN_COLOR }}
      >
        <div
          className="tw-rounded-full tw-w-16 tw-h-16 tw-bg-white tw-p-2 tw-flex"
          style={{ transform: "translateY(-50%) translateX(40vw)" }}
        >
          <img src={iconUrl} className="tw-w-16 " height="auto" />
        </div>
        <div className="tw-h-3/4 tw-font-bold tw-text-white tw-text-lg tw-flex tw-align-center tw-justify-center">
          {cardText}
        </div>
      </div>
    </>
  );
};
export default ShortCutCard;
