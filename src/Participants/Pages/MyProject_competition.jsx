import styled from "styled-components";
import CardCompetitionInfo from "../Components/general/CardCompetitionInfo";
// import dataJson from "../../data/data.json";
import RegisterCompetition from "../Components/competitionPage/project/RegisterCompetition";
import { BtnCreateProject, CreateProject } from "./CreateProject";
import ProjectCard_team from "../Components/competitionPage/project/ProjectCard_team";
import LeaveGroup from "../Components/Buttons/LeaveGroup";
import { PADDING_BIG_SCREEN, PADDING_SMALL_SCREEN } from '../../style/Padding';


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
      {/* <div className="row"> */}
        <div className="part1">
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
        <div className="part2">
        {isLogged && joinedCompetition && isLeader  && <BtnCreateProject setHasAProject={setHasAProject} hasATeam={hasATeam} />}
        {isLogged && joinedCompetition && hasATeam && !isLeader && <LeaveGroup className="quitterbtn" participantId={joinedCompetition.id} />}
        

          {data && <CardCompetitionInfo data={data} />}
          <p></p>
        </div>
      {/* </div> */}
    </Projects>
  );
};

const Projects = styled.div`
  /* padding-top: 2em;
  padding-bottom: 2em; */
  padding:${PADDING_BIG_SCREEN};
    @media (max-width : 425px) {
      padding:${PADDING_SMALL_SCREEN};

    }
    display: flex;
    justify-content: space-between;
    gap: 20px;
    /* flex-wrap: wrap; */
    @media (max-width:750px){
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    
`;

export default MyProject_competition;
