import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HorizontalStepper = ({ steps, icons, activeStep, onClick }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => onClick(index)}
        >
          <div
            className="tw-rounded-md"
            style={{
              backgroundColor: index <= activeStep ? "green" : "gray",
              padding: "2px", // Reduce padding for smaller size
              borderRadius: "4px", // Reduce border radius
              width: "25px", // Reduce width and height for smaller size
              height: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={icons[index]}
              style={{
                color: "white",
                fontSize: "10px", // Reduce icon size
              }}
            />
          </div>
          {index !== steps.length - 1 && (
            <div
              className="connector"
              style={{
                backgroundColor: index < activeStep ? "green" : "gray",
                width: "30px", // Reduce connector width
                height: "3px", // Keep connector height
                margin: "0 2px", // Add margin for spacing
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HorizontalStepper;
