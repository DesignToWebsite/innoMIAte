import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ORANGE_COLOR, RED_COLOR, GREEN_COLOR } from "../../../style/Colors";
import axios from "axios";

const ProfileInfo = () => {
  // Initialize state from localStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(user.skills || []);
  const [interest, setInterest] = useState("");
  const [interests, setInterests] = useState(user.interests || []);

  console.log(user);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  // Handle skill input changes
  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  // Handle key press for skills
  const handleSkillKeyPress = (e) => {
    if (e.key === "Enter" && skill.trim()) {
      setSkills((prevSkills) => [...prevSkills, skill.trim()]);
      setSkill("");
    }
  };

  // Handle delete skill
  const handleDeleteSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  // Handle interest input changes
  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  // Handle key press for interests
  const handleInterestKeyPress = (e) => {
    if (e.key === "Enter" && interest.trim()) {
      setInterests((prevInterests) => [...prevInterests, interest.trim()]);
      setInterest("");
    }
  };

  // Handle delete interest
  const handleDeleteInterest = (index) => {
    setInterests((prevInterests) => prevInterests.filter((_, i) => i !== index));
  };

  // Handle save action
  const handleSave = async () => {
    const url = `http://localhost:5299/api/User/${user.id}`;
    try {
      const response = await axios.put(url, { ...user, skills, interests });
      if (response.data) {
        localStorage.setItem('user', JSON.stringify({ ...user, skills, interests }));
        window.location.href = "/profile"; // Redirect to profile page
      }
    } catch (error) {
      console.log(error);
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

      {/* Input for skills */}
      <InputContainer>
        <Label>Compétences</Label>
        <SkillInputContainer>
          <div className="items">
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              {skill}
              <DeleteButton onClick={() => handleDeleteSkill(index)}>x</DeleteButton>
            </SkillItem>
          ))}
          </div>
          
          <InputInfo
            value={skill}
            onChange={handleSkillChange}
            onKeyPress={handleSkillKeyPress}
            placeholder="Ajouter une compétence"
          />
        </SkillInputContainer>
      </InputContainer>

      {/* Input for interests */}
      <InputContainer>
        <Label>Intérêts</Label>
        <InterestInputContainer>
          <div className="items">
          {interests.map((interest, index) => (
            <InterestItem key={index}>
              {interest}
              <DeleteButton onClick={() => handleDeleteInterest(index)}>x</DeleteButton>
            </InterestItem>
          ))}
          </div>
          
          <InputInfo
            value={interest}
            onChange={handleInterestChange}
            onKeyPress={handleInterestKeyPress}
            placeholder="Ajouter un intérêt"
          />
        </InterestInputContainer>
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
  .items{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
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
  padding: 5px;
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

const SkillInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: start;
  gap: 10px;
`;

const InterestInputContainer = styled(SkillInputContainer)``;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${ORANGE_COLOR};
  padding: 5px 10px;
  border-radius: 3px;
  color: white;
`;

const InterestItem = styled(SkillItem)``;

const DeleteButton = styled.button`
  margin-left: 5px;
  background: none;
  border: none;
  color: ${RED_COLOR};
  cursor: pointer;
  font-weight: bold;
`;

export default ProfileInfo;
