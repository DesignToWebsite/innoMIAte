import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stepper from "./stepper";
import HackathonInfo from "./HackathonInfo";
import Requirements from "./Requirements";
import Coaches from "./Coaches";
import Judges from "./Judges";
import Submissions from "./Submissions";
import Prizes from "./Prizes";
import Badges from "./Badges";
import {
  faInfo,
  faTasks,
  faUsers,
  faCheckCircle,
  faGavel,
  faUpload,
  faGift,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "../../common/all/nav";
import ValidationSteps from "./ValidationSteps";
import HorizontalStepper from "./horizontalStepper";

const CompetitionInscriptionWrapper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const steps = [
    "Hackathon Info",
    "Requirements",
    "Coaches",
    "Validation Steps",
    "Judges",
    "Submissions",
    "Prizes",
    "Badges",
  ];

  const icons = [
    faInfo,
    faTasks,
    faUsers,
    faCheckCircle,
    faGavel,
    faUpload,
    faGift,
    faFlag,
  ];

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return <HackathonInfo />;
      case 1:
        return <Requirements />;
      case 2:
        return <Coaches />;
      case 3:
        return <ValidationSteps />;
      case 4:
        return <Judges />;
      case 5:
        return <Submissions />;
      case 6:
        return <Prizes />;
      case 7:
        return <Badges />;

      default:
        return null;
    }
  };

  return (
    <>
      <Nav />

      <div className="tw-w-full tw-p-6">
        {windowWidth <= 768 ? (
          <>
            <div className="tw-sticky tw-top-0">
              <HorizontalStepper
                steps={steps}
                icons={icons}
                activeStep={currentStep}
                onClick={handleStepClick}
              />
            </div>
            <div className=" tw-m-4 tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-8 tw-bg-gray-100">
              {renderContent()}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {windowWidth > 768 && (
        <div className="tw-flex ">
          <div
            className="sidebar tw-w-1/5 tw-bg-gray-200 tw-p-6 hidden md:block" // Initially hide for small screens and show for medium screens and above
          >
            <h4 className="tw-text-2xl tw-font-bold tw-mb-4">HackathonSteps</h4>
            <Stepper
              currentStep={currentStep}
              handleStepClick={handleStepClick}
              steps={steps}
              icons={icons}
            />
          </div>
          <div className="tw-w-4/5 tw-p-6">
            <div className="tw-w-full tw-bordertw-rounded-lg tw-p-8 ">
              {renderContent()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompetitionInscriptionWrapper;
