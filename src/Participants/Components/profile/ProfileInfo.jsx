import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ORANGE_COLOR, RED_COLOR, GREEN_COLOR } from "../../../style/Colors";
import axios from "axios";

const ProfileInfo = () => {
  // Initialize state from localStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  // Handle save action
  const handleSave = async() => {
    const url = `http://localhost:5299/api/User/${user.id}`
    try{
      const response = await axios.put(url, user)
      if(response.data){
       localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "/profile"; // Redirect to profile page

      }
    }catch(error){
      console.log(error)
    }
  };

  return (
    <ProfileInfoContainer>
      <Title>Informations de profil</Title>
      <InfoText>Ces informations apparaîtront sur votre profil public Devpost.</InfoText>

      {/* Inputs for first and last name */}
      <Info>
        <InputContainer>
          <Label>Nom</Label>
          <InputInfo
            id="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </InputContainer>
        <InputContainer>
          <Label>Prénom</Label>
          <InputInfo
            id="firstName"
            value={user.firstName}
            onChange={handleInputChange}
          />
        </InputContainer>
      </Info>

      {/* Input for bio */}
      <InputContainer>
        <Label>Bio</Label>
        <Textarea
          id="bio"
          value={user.bio}
          onChange={handleInputChange}
        />
      </InputContainer>

      <Title>Social</Title>

      {/* Inputs for GitHub and LinkedIn */}
      <Info>
        <InputContainer>
          <Label>GitHub</Label>
          <InputInfo
            id="github"
            value={user.github}
            onChange={handleInputChange}
          />
        </InputContainer>
        <InputContainer>
          <Label>LinkedIn</Label>
          <InputInfo
            id="linkedin"
            value={user.linkedin}
            onChange={handleInputChange}
          />
        </InputContainer>
      </Info>

      {/* Input for website */}
      <InputContainer>
        <Label>Site Web</Label>
        <Input
          id="website"
          value={user.website}
          onChange={handleInputChange}
        />
      </InputContainer>

      {/* Buttons for saving changes or canceling */}
      <ButtonContainer>
        <SaveButton onClick={handleSave}>Enregistrer les modifications</SaveButton>
        <Link to="/profile">
          <CancelButton type="button">Annuler</CancelButton>
        </Link>
      </ButtonContainer>
    </ProfileInfoContainer>
  );
};
const ProfileInfoContainer = styled.div`
  margin-top: 20px;
`;

const Title = styled.h3`
  color: ${RED_COLOR};
  margin-top: 20px;
`;

const InfoText = styled.p`
  color: #666;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
 
`;

const ProfileImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const UploadPhotoLink = styled(Link)`
  margin-left: 20px;
  color: ${ORANGE_COLOR};
`;

const InputContainer = styled.div`
  margin-top: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 80%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const InputInfo = styled.input`
width: 80%;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px;
`;

const Textarea = styled.textarea`
  width: 80%;
  padding: 1px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: ${GREEN_COLOR};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: ${RED_COLOR};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export default ProfileInfo;
