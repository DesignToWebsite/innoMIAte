import styled from "styled-components";
import dataJson from "../../data/data.json";
import ProjectCard_competition from "./ProjectCard_competition";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
const Project_competition = () => {
  const {id} = useParams()
  const [data, setData] = useState(null)
  const connectedUser = JSON.parse(localStorage.getItem('user'))
  // const project = connectedUser.user.competition[id].project;
  useEffect(()=>{
    fetch(`http://localhost:8000/user/${connectedUser.id}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      const dataCompetition = data.competition.filter(item=> item.competitionId == id) 
      console.log(dataCompetition)
      setData(dataCompetition[0])
    })
  },[])
  return (
    <Project>
      <h2>Mon projet de hackathon</h2>
      {data && <ProjectCard_competition data={data.project}/>}
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
