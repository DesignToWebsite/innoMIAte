import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import LinkedIn from "../../assets/icons/Linkedln.png"
import git_icon from "../../assets/icons/git_icon.png"
import { ORANGE_COLOR, RED_COLOR, GREEN_COLOR } from "../../style/Colors";
import axios from "axios";

const AccountPrivacy = () => {
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
   const handleSave = async(e) => {
    e.preventDefault()
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
    <AccountPrivacyContainer>
      <Title>Confidentialité du compte</Title>
      <TitleSmall>Compte</TitleSmall>

      <InputContainer>
        <Label>Nom d'utilisateur</Label>
        <Input onChange={handleInputChange} id="userName"  defaultValue={user.userName} />
      </InputContainer>

      <InputContainer>
        <Label>Email</Label>
        <InfoText>La tête haute! Lorsque vous modifiez votre adresse e-mail, vous devrez revérifier avant de vous connecter avec cette adresse.</InfoText>
        <Input onChange={handleInputChange} id="email" defaultValue={user.email} />
      </InputContainer>
      <ButtonContainer>
        <SaveButton onClick={handleSave}>Enregistrer les modifications</SaveButton>
        <Link to="/profile">
          <CancelButton type="button">Annuler</CancelButton>
        </Link>
      </ButtonContainer>
    </AccountPrivacyContainer>
  );
};

const AccountPrivacyContainer = styled.div`
  margin-top: 20px;
`;

const Title = styled.h3`
  color: ${RED_COLOR};
  margin-top: 20px;
`;

const TitleSmall = styled.h4`
  color: #000;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  margin-top: 10px;
`;

const InfoText = styled.p`
  color: #666;
  font-size: 14px;
`;

const Icon =styled.img`
  margin-right: 5px;
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

const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const ConnectButton = styled.button`
  padding: 10px 20px;
  background-color: #1F78D1;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
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

export default AccountPrivacy;
