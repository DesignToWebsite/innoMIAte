import GuidesCard from "../common/cards/organisersGuides/card";
import icons from "../constants/icons";
import { colors } from "../constants/colors";

const GuidesWrapper = () => {
  const reservedHackathonsCardText =
    "Consulting the calendar can assist you in selecting the optimal date for your hackathon. When multiple hackathons occur simultaneously, it can diminish the visibility and attendance potential of your event";
  const endorsedExpertCardText =
    "You can enhance your hackathon by inviting endorsed judges and coaches renowned for their expertise. This ensures participants receive top-tier guidance and feedback, elevating the event's quality.";
  const FAQCardText =
    "the FAQ section helps streamline communication, assists users in navigating the app effectively, and ensures a smooth experience for all stakeholders involved in the hackathon.";
  const MIACardText =
    "This platform was developed by the MIA organization in collaboration with ENSAO during an internship, aiming to provide a comprehensive solution for hackathon management. For more information about MIA and its activities, please visit their official website.";
  const licenseCardText =
    "This agreement outlines the terms and conditions for utilizing the platform, emphasizing its non-profit nature and specialization in hosting specific hackathon events. It defines the rules and guidelines necessary for ensuring fair and compliant participation.";
  const reservedHackathonsCardTitle = "Reserved Hackathons Clendar";
  const endorsedExpertCardTitle = "Endorsed Judges and Coaches ";
  const FAQCardTitle = "Frequently Asked Questions";
  const MIACardTitle = "MIA Organisation";
  const licenseCardTitle = "License";
  const reservedHackathonsCardButton = "Consult Calendar";
  const endorsedExpertCardButton = "Consult Endorsed Experts";
  const FAQCardButton = "Consult FAQ";
  const MIACardButton = "Consult MIA Website";
  const licenseCardButton = "Read the license";
  return (
    <div className="tw-mt-8 tw-p-4  tw-flex tw-flex-wrap tw-justify-center tw-gap-4 ">
      <GuidesCard
        iconUrl={icons.calendarIcon}
        title={reservedHackathonsCardTitle}
        cardText={reservedHackathonsCardText}
        cardButtonText={reservedHackathonsCardButton}
        borderColor={colors.RED_COLOR}
      />
      <GuidesCard
        iconUrl={icons.endorsedExpert}
        title={endorsedExpertCardTitle}
        cardText={endorsedExpertCardText}
        cardButtonText={endorsedExpertCardButton}
        borderColor={colors.GREEN_COLOR}
      />
      <GuidesCard
        iconUrl={icons.FAQIcon}
        title={FAQCardTitle}
        cardText={FAQCardText}
        cardButtonText={FAQCardButton}
        borderColor={colors.RED_COLOR}
      />
      <GuidesCard
        iconUrl={icons.MIAIcon}
        title={MIACardTitle}
        cardText={MIACardText}
        cardButtonText={MIACardButton}
        borderColor={colors.GREEN_COLOR}
      />
      <GuidesCard
        iconUrl={icons.licenseIcon}
        title={licenseCardTitle}
        cardText={licenseCardText}
        cardButtonText={licenseCardButton}
        borderColor={colors.RED_COLOR}
      />
    </div>
  );
};
export default GuidesWrapper;
