import styled from "styled-components";
import dataJson from "../../data/data.json";
import ProjectCard_competition from "./ProjectCard_competition";
const Project_competition = () => {
  const data = dataJson.user.competition[0].project;
  return (
    <Project>
      <h2>Mon projet de hackathon</h2>
      <ProjectCard_competition data={data}/>
    </Project>
  );
};

const Project = styled.div`
  padding: 0 2em;
  h2{
    margin-bottom: 1.5em;
  }

 
`;

export default Project_competition;
