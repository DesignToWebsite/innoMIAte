import { useEffect, useState } from "react";
import CreateProject_step from "../Components/competitionPage/project/CreateProject_step";
import StepsMenu from "../Components/StepsMenu";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import dataSteps from "../../data/data.json";
import stepCompleted from "../../assets/icons/completed.jpg";
import styled from "styled-components";
import { PADDING_BIG_SCREEN, PADDING_SMALL_SCREEN } from "../../style/Padding";
const StepsCompetition_page = ({ data, hasATeam, joinedCompetition }) => {
  const location = useLocation();
  const { id, idStep } = useParams();
  const [steps, setSteps] = useState(dataSteps.projectSteps);
  console.log(steps);
  // useEffect(() => {
  //   const fetchCompetition = async () => {
  //     const url = `http://localhost:5299/api/Step/ByCompetition/${data.competitionId}`;
  //     try {
  //       const response = await axios.get(url);
  //       console.log("Response data steps:", response.data);
  //       setSteps(response.data.$values);
  //     } catch (error) {
  //       console.error("Error fetching data steps:", error);
  //     }
  //   };
  //   fetchCompetition();
  // }, [data.competitionId]);

  if (steps === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {steps && (
        <div className="steps">
          <StepsMenu steps={steps} />
          {idStep != "completed" && (
            <CreateProject_step
              stepInfo={steps[idStep]}
              stepslenght={steps.length}
            />
          )}
          {idStep == "completed" && (
            <StepCompletedId>
                            <p>
              Toutes les étapes terminées

              </p>
              <img src={stepCompleted} alt="" />

            </StepCompletedId>
          )}
        </div>
      )}
    </>
  );
};
const StepCompletedId = styled.div`
  max-width: 500px;
/* margin: 2em auto; */
padding:${PADDING_BIG_SCREEN};
    @media (max-width : 425px) {
      padding:${PADDING_SMALL_SCREEN};

    }
  img {
    width: 100%;
  }
  p{
    margin: 15px 0;
    text-align: center;
    font-size: 2em;
  }
`;
export default StepsCompetition_page;
