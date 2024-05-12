import { useEffect, useState } from "react";
import CreateProject_step from "../Components/CreateProject_step";
import StepsMenu from "../Components/StepsMenu";
import { Route, Routes, useLocation, useParams } from "react-router";
import ManageTeam from "../Components/ManageTeam";
import CompInfoOverview from "../Components/CompInfoOverview";
import axios from "axios";

const StepsCompetition_page = ({data, hasATeam, joinedCompetition }) => {
  const location = useLocation();
  const { id, step } = useParams();
  const [steps, setSteps] = useState(null);
  console.log(id, step);
  console.log(data.competitionId)
  useEffect(() => {
    const fetchCompetition = async () => {
      const url = `http://localhost:5299/api/StepCompetition/competitionSteps/${data.competitionId}`;
      try {
        const response = await axios.get(url);
        console.log("Response data steps:", response.data);
        setSteps(response.data);

      } catch (error) {
        console.error("Error fetching data steps:", error);
      }
    };
    fetchCompetition();
  }, []);
  const renderStepComponent = () => {
    switch (step) {
      case "manageTeam":
        return <ManageTeam hasATeam={hasATeam} />;
      case "project":
        return <CreateProject_step />;
      default:
        return <p>Step does not exist</p>;
    }
  };
  return (
    <div className="steps">
        <h2>steps</h2>
      {/* <StepsMenu currentStep={currentStep} setCurrentStep={setCurrentStep} steps={steps} /> */}
      {/* <StepsMenu steps={steps} />

      {renderStepComponent()} */}
      {/* { steps && !manageTeam  && <CreateProject_step currentStep={currentStep}  setCurrentStep={setCurrentStep} steps={steps} />}
            { steps && manageTeam && <ManageTeam />} */}
    </div>
  );
};

export default StepsCompetition_page;
