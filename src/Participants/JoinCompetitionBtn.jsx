import styled from "styled-components";

import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";
import { useState } from "react";
import InProgress from "../common/All/InProgress";

const JoinCompetitionBtn = ({ data, isLogged, joinedCompetition, setJoinedCompetition }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const connectedUser = JSON.parse(localStorage.getItem('user'));
  console.log(connectedUser)
  const { id } = useParams()
  console.log(data)
  const [inProgress, setInProgress] = useState(false)
  const [error, setError] = useState(null)
  const addProject = async (e) => {
    setInProgress(true)
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
          window.location.reload()
          navigate(`/competition/${id}/myProject`)
        }
      }catch(error){
        setInProgress(false)
        setError("error")
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
    <>
      {inProgress ? 
      <InProgress /> :
      <button onClick={addProject} className="btn btn-red">
            Rejoignez le hackathon
      </button>
      }
      {
        error && <p className="error">{error}</p>
      }
    </>

    
  );
};


export default JoinCompetitionBtn;
