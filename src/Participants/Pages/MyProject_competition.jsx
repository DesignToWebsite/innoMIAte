import styled from "styled-components";
import CardCompetitionInfo from "../Components/CardCompetitionInfo";
import dataJson from "../../data/data.json";
import RegisterCompetition from "../Components/RegisterCompetition";
import { BtnCreateProject, CreateProject } from "./CreateProject";
import Project_competition from "../Components/Project_competition";
import { useEffect, useState } from "react";

const MyProject_competition = () => {
  const data = dataJson.competition;
  const isLogged = localStorage.getItem("user");
  const [projectExist, setProjectExist] = useState(localStorage.getItem('projectExist'));
  // useEffect(()=>{
  //   
  // },[])
  console.log(projectExist)
  return (
    <Projects>
      <div className="row">
        <div className="col-12 col-md-7 col-sm-6 col-lg-8">
          {!isLogged && <RegisterCompetition />}
          {isLogged && !projectExist && <CreateProject projectExist={projectExist} setProjectExist={setProjectExist} />}
          {isLogged && projectExist && <Project_competition />}
        </div>
        <div className="col-12 col-md-5 col-sm-6 col-lg-4">
          {isLogged && projectExist  && <BtnCreateProject />}
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
