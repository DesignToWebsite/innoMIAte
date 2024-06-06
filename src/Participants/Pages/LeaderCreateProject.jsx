import { useEffect, useState } from "react";
import CreateProject_step from "../Components/CreateProject_step";
import StepsMenu from "../Components/StepsMenu";
import { Route, Routes, useLocation, useParams } from "react-router";
import ManageTeam from "../Components/ManageTeam";
import CompInfoOverview from "../Components/CompInfoOverview";
import axios from "axios";
import JoinCreateTeam from "../Components/JoinCreateTeam";
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
            hasAProject={hasAProject} setHasAProject={setHasAProject}

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
