import styled from "styled-components";

import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";

const AddProjectBtn = ({ data, isLogged, joinedCompetition, setJoinedCompetition }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const connectedUser = JSON.parse(localStorage.getItem('user'));
  console.log(connectedUser)
  const { id } = useParams()
  console.log(data)
  const addProject = async (e) => {
    if (isLogged) {
      const userId = connectedUser.id
      const competitionId = data.competitionId
      const teamId = null
      const userCompetition = {
        userId,
        competitionId,
        teamId
      }
      
      try{
        const url = "http://localhost:5299/api/CompetitionParticipant";
        const response = await axios.post(url, userCompetition)
        if(response.data){
          setJoinedCompetition(true)
          navigate(`/competition/${id}/steps`)
        }
      }catch(error){
        console.error(error)
      }
    } 
    else {
      navigate("/login", {
        state: { from: location.pathname }
      })
    }
  };

  
  return (
    <button onClick={addProject} className="btn btn-red">
            Rejoignez le hackathon
    </button>
  );
};


export default AddProjectBtn;
