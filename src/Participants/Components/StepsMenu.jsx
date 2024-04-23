import { renderToString } from "react-dom/server";
import styled from "styled-components";
import completeStepIcon from "../../assets/dashboard_competition/completeStep.png";
import incompleteStepIcon from "../../assets/dashboard_competition/incompleteStep.png";
import { useNavigate } from "react-router";
import { useState } from "react";

const StepsMenu = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState("step1");
  const activeStep = (id) => {
    setCurrentStep(`step${id}`);
    navigate("/competition/step" + id);
  };
  return (
    <Menu>
      <div className="stepList">
        <div
          onClick={() => {
            activeStep(1);
          }}
          className="step1 step incomplete"
        >
          <img src={incompleteStepIcon} alt="" />
          <span>Manage team</span>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 46.241042222054375 155.14875111077515"
            width="21"
            height="71"
          >
            <path d="M0 151.15L42.24 75.57L0 0" class="arrow"></path>
          </svg>{" "}
        </div>
        <div
          onClick={() => {
            activeStep(2);
          }}
          className="step2 step incomplete active"
        >
          <img src={incompleteStepIcon} alt="" />
          <span>Project overview</span>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 46.241042222054375 155.14875111077515"
            width="21"
            height="71"
          >
            <path d="M0 151.15L42.24 75.57L0 0" class="arrow"></path>
          </svg>{" "}
        </div>
        <div
          onClick={() => {
            activeStep(3);
          }}
          className="step3 step incomplete"
        >
          <img src={incompleteStepIcon} alt="" />
          <span>Project details</span>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 46.241042222054375 155.14875111077515"
            width="21"
            height="71"
          >
            <path d="M0 151.15L42.24 75.57L0 0" class="arrow"></path>
          </svg>{" "}
        </div>
        <div
          onClick={() => {
            activeStep(4);
          }}
          className="step4 step incomplete"
        >
          <img src={incompleteStepIcon} alt="" />
          <span>Additional info</span>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 46.241042222054375 155.14875111077515"
            width="21"
            height="71"
          >
            <path d="M0 151.15L42.24 75.57L0 0" class="arrow"></path>
          </svg>{" "}
        </div>
        <div
          onClick={() => {
            activeStep(5);
          }}
          className="step5 step incomplete"
        >
          <img src={incompleteStepIcon} alt="" />
          <span>Submit</span>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 46.241042222054375 155.14875111077515"
            width="21"
            height="71"
          >
            <path d="M0 151.15L42.24 75.57L0 0" class="arrow"></path>
          </svg>{" "}
        </div>
        {/* </div> */}
      </div>
    </Menu>
  );
};

const Menu = styled.div`
  padding: 2em;
  .stepList {
    position: relative;
    display: flex;
    border: 1px solid #9caeb2;
    border-right: none;
    width: fit-content;
    /* margin-bottom: 2em; */
    svg {
      position: absolute;
      height: 51px;
      width: 15px;
      right: -15px;

      .arrow {
        fill: white;
        stroke: #9caeb2;
        stroke-width: 2px;
      }
    }
    .step {
      position: relative;
      cursor: pointer;
      padding: 0 15px;
      height: 51px;
      display: flex;
      align-items: center;
      &:hover,
      &.active {
        background: #dce6e9;
        svg,
        path {
          fill: #dce6e9;
        }
      }
      img {
        margin: 0 5px;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default StepsMenu;
