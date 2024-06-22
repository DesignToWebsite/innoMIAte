import styled from "styled-components";
import CardCompetitionInfo from "../Components/general/CardCompetitionInfo";
// import dataJson from "../../data/data.json";
import RegisterCompetition from "../Components/competitionPage/project/RegisterCompetition";
import { BtnCreateProject, CreateProject } from "./CreateProject";
import ProjectCard_team from "../Components/competitionPage/project/ProjectCard_team";
import LeaveGroup from "../Components/Buttons/LeaveGroup";

const MyProject_competition = ({
  data,
  isLogged,
  joinedCompetition,
  setJoinedCompetition,
  setHasATeam,
  hasATeam,
  hasAProject,
  setHasAProject,
  isLeader
  
}) => {
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
            isLeader={isLeader}
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
        {isLogged && joinedCompetition && isLeader  && <BtnCreateProject hasATeam={hasATeam} />}
        {isLogged && joinedCompetition && !isLeader && <LeaveGroup className="quitterbtn" participantId={joinedCompetition.id} />}
        

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
