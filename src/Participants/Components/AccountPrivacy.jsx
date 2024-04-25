import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import LinkedIn from "../../assets/icons/Linkedln.png"
import git_icon from "../../assets/icons/git_icon.png"
import { ORANGE_COLOR, RED_COLOR, GREEN_COLOR } from "../../style/Colors";

const AccountPrivacy = () => {
  // Supposons que les données utilisateur soient accessibles dans data.user
  const { userName, email } = data.user;

  const handleSave = () => {
    // Récupérer les nouvelles valeurs des inputs
    const newUserName = document.getElementById("userName").value;
    const newEmail = document.getElementById("email").value;
  
    // Enregistrer les modifications
    // Par exemple, vous pouvez envoyer ces nouvelles valeurs à votre backend pour les enregistrer dans la base de données
    console.log("Nouveau nom d'utilisateur :", newUserName);
    console.log("Nouvel email :", newEmail);
  
    // Rediriger vers la page de profil
    window.location.href = "/profile"; // Redirection vers la page de profil
  };

  return (
    <AccountPrivacyContainer>
      <Title>Confidentialité du compte</Title>
      <TitleSmall>Compte</TitleSmall>

      <InputContainer>
        <Label>Nom d'utilisateur</Label>
        <Input id="userName"  defaultValue={userName} />
      </InputContainer>

      <InputContainer>
        <Label>Email</Label>
        <InfoText>La tête haute! Lorsque vous modifiez votre adresse e-mail, vous devrez revérifier avant de vous connecter avec cette adresse.</InfoText>
        <Input id="email" defaultValue={email} />
      </InputContainer>

      <TitleSmall>Connexion sociale</TitleSmall>
      <InfoText>Ajoutez vos comptes de réseaux sociaux pour vous connecter plus facilement à Devpost</InfoText>

      <ButtonContainer>
      <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=123456789&redirect_uri=https://votre-domaine.com/auth/linkedin/callback&state=123abc&scope=r_liteprofile%20r_emailaddress">
        <ConnectButton>
          <Icon src={LinkedIn} />
          Connectez-vous avec LinkedIn
        </ConnectButton>
        </a>
        <a href="https://github.com/login/oauth/authorize">
        <ConnectButton >
          <Icon src={git_icon} />
          Connectez-vous avec GitHub
        </ConnectButton>
        </a>
      </ButtonContainer>

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
