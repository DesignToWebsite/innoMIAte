import ShortCutCard from "../common/cards/shorcuts/Card";
import icons from "../constants/icons";
const ShortCutsWrapper = () => {
  const showHackathonText = "Show Hackathons";
  const showDemoText = "Features Demo  ";
  const feedbackText = "Tell Us Your Feedback.";
  return (
    <div className="tw-mt-8 tw-p-4 tw-h-screen  tw-flex tw-flex-wrap  tw-justify-center tw-gap-4">
      <ShortCutCard
        iconUrl={icons.showHackathonsIcon}
        cardText={showHackathonText}
      />
      <ShortCutCard iconUrl={icons.demoIcon} cardText={showDemoText} />
      <ShortCutCard iconUrl={icons.feedbackIcon} cardText={feedbackText} />
    </div>
  );
};
export default ShortCutsWrapper;
