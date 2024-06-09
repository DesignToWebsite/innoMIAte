import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const CreateProjectBtn = ({
  dataCard,
  hasATeam,
  joinedCompetition,
  setHasATeam,
  hasAProjectn, setHasAProject

}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const HandelCreate = async (e) => {
    e.preventDefault();
    const { name, description, teamName } = dataCard;

    // Check if required fields are filled
    if (!name || !description || !teamName) {
      // console.log(dataCard);
      alert(
        "Please fill in all required fields: Project name, Project Description, and Team name."
      );
      return;
    }

    let team = {
      name: dataCard.teamName, ///team NAME
      slogan: dataCard.slogan, //TEAM SLOGAN
      competitionId: dataCard.competitionId, /////
      projectName: dataCard.name,
      projectDescription: dataCard.description,
      projectImage: dataCard.img_save,
    };

    const leaderId = dataCard.leaderId;
    try {
      if (team.projectImage) {
        const uploadImage = `http://localhost:5299/api/Files/upload`;
        const imageData = new FormData();
        imageData.append("file", team.projectImage);
        // console.log(imageData);
        const responseImageUploaded = await axios.post(uploadImage, imageData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("image uploaded succusfully");
        team = {
          name: dataCard.teamName, ///team NAME
          slogan: dataCard.slogan, //TEAM SLOGAN
          competitionId: dataCard.competitionId, /////
          projectName: dataCard.name,
          projectDescription: dataCard.description,
          projectImage: responseImageUploaded.data.filePath,
        };
      
      }
      //add the project
      const uploadProjectUrl = `http://localhost:5299/api/CompetitionParticipant/createTeamAssignLeader?participantId=${leaderId}`;
      const response = await axios.post(uploadProjectUrl, team);
      if (response) {
        console.log("joined");
        setHasAProject(team);
        // setHasATeam(team);
        window.location.reload();
        navigate(`/competition/${id}/steps`);
      }
    } catch (error) {
      // console.log(team);
      console.error(error);
    }
  };

  return (
    <BtnCreate>
      <button type="submit" className="btn btn-red" onClick={HandelCreate}>
        Create project
      </button>
    </BtnCreate>
  );
};

const BtnCreate = styled.div``;

export default CreateProjectBtn;
