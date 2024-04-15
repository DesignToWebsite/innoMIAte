import icons from "../../../constants/icons";
const GuidesCard = ({
  borderColor,
  title,
  cardText,
  cardButtonText,
  iconUrl,
}) => {
  return (
    <div
      className="tw-border tw-flex tw-flex-col gap-2 tw-border-2 tw-border-solid tw-p-4  tw-m-2 tw-w-full sm:tw-w-1/4 "
      style={{ borderColor: borderColor }}
    >
      <div className="header tw-flex tw-h-1/6  ">
        <div className="tw-w-1/4 tw-flex tw-align-flex">
          <img className="tw-w-8 tw-h-8" src={iconUrl} />
        </div>
        <div
          className="tw-w-3/4 tw-text-sm tw-font-bold"
          style={{ color: borderColor }}
        >
          {title}
        </div>
      </div>
      <div className="tw-h-4/6 tw-text-sm tw-text-justify	">{cardText}</div>
      <div className="tw-flex tw-h-1/6 tw-align-end tw-justify-end   ">
        <button
          className="tw-p-0 tw-w-4/5 tw-h-8 tw-font-bold  tw-rounded-full tw-text-white"
          style={{ backgroundColor: borderColor }}
        >
          {cardButtonText}
        </button>
      </div>
    </div>
  );
};
export default GuidesCard;
