// import { useEffect, useState } from "react";
// import CreateProject_step from "../Components/CreateProject_step";
// import StepsMenu from "../Components/StepsMenu";
// import { Route, Routes, useLocation, useParams } from "react-router";
// import ManageTeam from "../Components/ManageTeam";
// import CompInfoOverview from "../Components/CompInfoOverview";
// import axios from "axios";
// import JoinCreateTeam from "../Components/JoinCreateTeam";

// const StepsCompetition_page = ({data, hasATeam, joinedCompetition }) => {
//   const location = useLocation();
//   const { id, step } = useParams();
//   const [steps, setSteps] = useState(null);
//   console.log(id, step);
//   // console.log(data.competitionId)
//   useEffect(() => {
//     const fetchCompetition = async () => {
//       //http://localhost:5299/api/Steps/stepsCompetition?id=1

//       const url = `http://localhost:5299/api/Steps/stepsCompetition?id=${data.competitionId}`;
//       try {
//         const response = await axios.get(url);
//         console.log("Response data steps:", response.data);
//         setSteps(response.data.$values);
        
//       } catch (error) {
//         console.error("Error fetching data steps:", error);
//       }
//     };
//     fetchCompetition();
//   }, []);
//   //  console.log(step)
//   return (
//     <div className="steps">
//       <StepsMenu  steps={steps}/>
//         {/* <h2>Create project</h2>   */}
//         {
//           step == "manageTeam" && <ManageTeam hasATeam={hasATeam} />
//         }

//         {
//           step != "manageTeam" && <CreateProject_step stepInfo={steps[step]} />
//         }

//     </div>
//   );
// };

// export default StepsCompetition_page;


import { useEffect, useState } from "react";
import CreateProject_step from "../Components/CreateProject_step";
import StepsMenu from "../Components/StepsMenu";
import { Route, Routes, useLocation, useParams } from "react-router";
import ManageTeam from "../Components/ManageTeam";
import CompInfoOverview from "../Components/CompInfoOverview";
import axios from "axios";
import JoinCreateTeam from "../Components/JoinCreateTeam";

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
      {step === "manageTeam" ? (
        <ManageTeam hasATeam={hasATeam} />
      ) : (
        <CreateProject_step stepInfo={steps[step]} />
      )}
    </div>
  );
};

export default StepsCompetition_page;
