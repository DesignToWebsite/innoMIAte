import { useEffect, useState } from "react";
import CreateProject_step from "../Components/competitionPage/project/CreateProject_step";
import StepsMenu from "../Components/StepsMenu";
import { useLocation, useParams } from "react-router";
import axios from "axios";

const StepsCompetition_page = ({ data, hasATeam, joinedCompetition }) => {
  const location = useLocation();
  const { id, step } = useParams();
  const [steps, setSteps] = useState(null);

  useEffect(() => {
    const fetchCompetition = async () => {
      const url = `http://localhost:5299/api/Steps/stepsCompetition?id=${data.competitionId}`;
      try {
        const response = await axios.get(url);
        console.log("Response data steps:", response.data);
        setSteps(response.data.$values);
      } catch (error) {
        console.error("Error fetching data steps:", error);
      }
    };
    fetchCompetition();
  }, [data.competitionId]);

  if (steps === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="steps">
      <StepsMenu steps={steps} />
        <CreateProject_step stepInfo={steps[step]} />
    </div>
  );
};

export default StepsCompetition_page;
