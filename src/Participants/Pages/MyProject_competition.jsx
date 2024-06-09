import styled from "styled-components";
import CardCompetitionInfo from "../Components/CardCompetitionInfo";
import dataJson from "../../data/data.json";
import RegisterCompetition from "../Components/RegisterCompetition";
import { BtnCreateProject, CreateProject } from "./CreateProject";
import Project_competition from "../Components/Project_competition";
import { useEffect, useState } from "react";
import ProjectCard_competition from "../Components/ProjectCard_competition";
import ProjectCard_team from "../Components/ProjectCard_team";

const MyProject_competition = ({
  data,
  isLogged,
  joinedCompetition,
  setJoinedCompetition,
  setHasATeam,
  hasATeam,
  hasAProject,
  setHasAProject
  
}) => {
  // console.log("has a team ", hasATeam);
  return (
    <Projects>
      <div className="row">
        <div className="col-12 col-md-7 col-lg-8">
          {!isLogged && <RegisterCompetition />}
          {isLogged && !joinedCompetition && (
            <CreateProject
              isLogged={isLogged}
              joinedCompetition={joinedCompetition}
              setJoinedCompetition={setJoinedCompetition}
              data={data}
              setHasATeam={setHasATeam}
              hasATeam={setHasATeam}
              hasAProject={hasAProject} setHasAProject={setHasAProject}
            />
          )}
          {isLogged && joinedCompetition && hasATeam && (
            <Project_competition 
            data={data}
            setHasATeam={setHasATeam}
              hasATeam={setHasATeam}
              hasAProject={hasAProject} setHasAProject={setHasAProject}
             />
          )}
          {isLogged && joinedCompetition && !hasATeam && (
            <CreateProject
              isLogged={isLogged}
              joinedCompetition={joinedCompetition}
              setJoinedCompetition={setJoinedCompetition}
              data={data}
              setHasATeam={setHasATeam}
              hasATeam={setHasATeam}
              hasAProject={hasAProject} setHasAProject={setHasAProject}
            />
          )}
          {isLogged && joinedCompetition && hasATeam && (
            <ProjectCard_team
              isLogged={isLogged}
              joinedCompetition={joinedCompetition}
              setJoinedCompetition={setJoinedCompetition}
              data={data}
              setHasATeam={setHasATeam}
              hasATeam={hasATeam}
              hasAProject={hasAProject} setHasAProject={setHasAProject}
            />
          )}
        </div>
        <div className="col-12 col-md-5 col-lg-4">
          {isLogged && joinedCompetition && <BtnCreateProject />}
          {data && <CardCompetitionInfo data={data} />}
          <p></p>
        </div>
      </div>
    </Projects>
  );
};

const Projects = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
`;

export default MyProject_competition;
