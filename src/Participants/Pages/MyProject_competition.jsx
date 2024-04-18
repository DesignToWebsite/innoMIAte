import styled from "styled-components";
import CardCompetitionInfo from "../Components/CardCompetitionInfo";
import dataJson from "../../data/data.json";
import RegisterCompetition from "../Components/RegisterCompetition";
import { BtnCreateProject, CreateProject } from "./CreateProject";
import Project_competition from "../Components/Project_competition";

const MyProject_competition = () => {
  const data = dataJson.competition;
  const isLogged = true;
  const noProject = false;

  return (
    <Projects>
      <div className="row">
        <div className="col-12 col-md-7 col-sm-6 col-lg-8">
          {!isLogged && <RegisterCompetition />}
          {isLogged && noProject && <CreateProject />}
          {isLogged && !noProject && <Project_competition />}
        </div>
        <div className="col-12 col-md-5 col-sm-6 col-lg-4">
          {isLogged && noProject  && <BtnCreateProject />}
          <CardCompetitionInfo data={data} />
          <p>

          </p>
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
