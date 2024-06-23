import { useEffect, useState } from "react";
import JoinCreateTeam from "../Components/competitionPage/team/JoinCreateTeam";
import styled from "styled-components";
import { PADDING_BIG_SCREEN, PADDING_SMALL_SCREEN } from '../../style/Padding';

const LeaderCreateProject = ({
  data,
  hasATeam,
  joinedCompetition,
  setHasATeam,
  hasAProject, setHasAProject

}) => {
  return (
    <Create>
      <h2 className="header">Create project</h2>
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
/* margin:  2em; */
padding:${PADDING_BIG_SCREEN};
    @media (max-width : 425px) {
      padding:${PADDING_SMALL_SCREEN};

    }
h2{
  /* font-weight: bold; */
}
`
export default LeaderCreateProject;
