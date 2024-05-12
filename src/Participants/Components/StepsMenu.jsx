import { renderToString } from "react-dom/server";
import styled from "styled-components";
import completeStepIcon from "../../assets/dashboard_competition/completeStep.png";
import incompleteStepIcon from "../../assets/dashboard_competition/incompleteStep.png";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import data from "../../data/data.json";

const StepsMenu = ({steps}) => {
  const navigate = useNavigate();
  const {id, step} = useParams();
 const [currentStep, setCurrentStep] = useState(step)
  return (
    <Menu>
      <div className="stepList">
        <div
          className={`manageTeam step incomplete ${currentStep=="manageTeam" ? "active" : ""}`}
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
{/*         
        {steps?.map((step, index) => {
          return (
            <div
              key={index}
              className={`step${index} step ${step.completed ? "complete" : "incomplete"} ${currentStep==`${index}` ? "active" : ""}`}
            >
              <img src={incompleteStepIcon} alt="" />
              <span>{step.Title}</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 46.241042222054375 155.14875111077515"
                width="21"
                height="71"
              >
                <path d="M0 151.15L42.24 75.57L0 0" class="arrow"></path>
              </svg>
            </div>
          );
        })} */}
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
