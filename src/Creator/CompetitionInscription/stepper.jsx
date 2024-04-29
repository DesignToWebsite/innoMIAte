import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faTasks,
  faUsers,
  faCheckCircle,
  faGavel,
  faUpload,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

const Stepper = ({ currentStep, handleStepClick, steps, icons }) => {
  return (
    <div className="tw-flex tw-flex-col">
      {steps.map((step, index) => (
        <div key={index} className="tw-flex tw-flex-start flex-column">
          <div
            className="tw-p-0 tw-m-0 tw-flex"
            onClick={() => handleStepClick(index)} 
            style={{ cursor: "pointer" }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                icon={icons[index]}
                size="lg"
                style={{
                  width: "30%",
                  backgroundColor: currentStep >= index ? "green" : "gray",
                  padding: "0.5rem",
                  borderRadius: "10px",
                  color: "#FFF",
                }}
              />
            </div>
            <div
              className="sm:tw-block tw-hidden"
              style={{
                width: "70%",
                color: currentStep >= index ? "green" : "gray",
              }}
            >
              {step}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div style={{ width: "30%" }} className="tw-flex tw-justify-center">
              <div
                style={{
                  backgroundColor: currentStep > index ? "green" : "gray",
                  width: "5px",
                  height: "35px",
                  left: 10,
                }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
