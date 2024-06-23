import { useState } from "react";
import styled from "styled-components";
import Card_project from "../project/Steps_components/Card_project";
import CreateProjectBtn from "../../Buttons/CreateProjectBtn";
import { GRAY_COLOR, ORANGE_COLOR } from "../../../../style/Colors";
import alert from "../../../../assets/icons/alert.png"
const JoinCreateTeam = ({data,hasATeam,
  joinedCompetition,
  setHasATeam,
  hasAProject, setHasAProject

  }) => {
  const connectedUser = JSON.parse(localStorage.getItem('user'));
  const userId = connectedUser.id

  const [dataCard, setDataCard] = useState({
    leaderId : userId,
    name: "empty",
    description: "empty",
    img_save: null,
    img : null,
    team: [userId],
    teamName: null,
    slogan: null,
    competitionId : data.competitionId
  });
  const maxText = 50;
  const maxInput = 20;
  const [remainingCharactersInput, setRemainingCharactersInput] =
    useState(maxInput);
  const [remainingCharactersText, setRemainingCharactersText] =
    useState(maxText);
  
  const handleInputChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (maxInput && name === "name") {
      setRemainingCharactersInput(maxInput - value.length);
    }
    if (maxText && name === "description") {
      setRemainingCharactersText(maxText - value.length);
    }
    setDataCard((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <JoinOrCreateTeam>
      <div>
        <h3 className="alertInfo">
          <img src={alert} alt="" />
          Seul le leader peut créer un projet, si vous ne l'êtes pas, vous devez rejoindre une équipe
         <br /> Remarque : vous ne pouvez pas modifier les informations du projet une fois celui-ci créé.</h3>
      </div>
      <form className="isLeader">
        <div className="createProject">
          <div className="inputs">
            <div className="input">
              <label htmlFor="name">Project name</label>
              <input
                type="input"
                name="name"
                id="name"
                onChange={handleInputChange}
                required
              />
              <p className="charactersLeft">
                {remainingCharactersInput} caractères restants
              </p>
            </div>
            <div className="input">
              <label htmlFor="description">Project Description</label>
              <textarea
                type="input"
                name="description"
                id="description"
                onChange={handleInputChange}
                rows="4"
                cols="50"
                required
              />
              <p className="charactersLeft">
                {remainingCharactersText} caractères restants
              </p>
            </div>
            <div className="input">
              <label htmlFor="teamName">Team name</label>
              <input
                type="input"
                name="teamName"
                id="teamName"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="slogan">Slogan</label>
              <input
                type="input"
                name="slogan"
                id="slogan"
                onChange={handleInputChange}
              />
            </div>
            <CreateProjectBtn
            hasATeam={hasATeam}
            joinedCompetition={joinedCompetition}
            setHasATeam={setHasATeam}
            dataCard={dataCard} 
            hasAProject={hasAProject} setHasAProject={setHasAProject}
/>
          </div>
        </div>
        <Card_project setDataCard={setDataCard} dataCard={dataCard} />
      </form>
    </JoinOrCreateTeam>
  );
};

const JoinOrCreateTeam = styled.div`
  /* padding: 2em; */

  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    flex-wrap: wrap;
    input,
    textarea {
      all: initial;
      padding: 10px 10px;
      border: 1px solid #c4c6c7;
      width: 100%;          
      max-width: 500px;     
      box-sizing: border-box; 
   
    }
    .charactersLeft {
      text-align: end;
      color: #b3b5b6;
      font-size: 17px;
    }
  }
  .isLeader {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 2em auto;
    @media (max-width: 800px){
      flex-direction: column-reverse;
    }
  }
`;

export default JoinCreateTeam;
