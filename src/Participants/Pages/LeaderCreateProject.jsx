import { useEffect, useState } from "react";
import JoinCreateTeam from "../Components/competitionPage/team/JoinCreateTeam";
import styled from "styled-components";

const LeaderCreateProject = ({
  data,
  hasATeam,
  joinedCompetition,
  setHasATeam,
  hasAProject, setHasAProject

}) => {
  return (
    <Create>
      <h2>Create project</h2>
      <JoinCreateTeam 
            hasAProject={hasAProject} 
            setHasAProject={setHasAProject}
            hasATeam={hasATeam}
            joinedCompetition={joinedCompetition}
            setHasATeam={setHasATeam}
            data={data} />
    </Create>
  );
};
const Create = styled.div`
margin:  2em;

`
export default LeaderCreateProject;
