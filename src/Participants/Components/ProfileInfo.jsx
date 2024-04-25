import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { ORANGE_COLOR, RED_COLOR, GREEN_COLOR } from "../../style/Colors";

const ProfileInfo = () => {
  // Supposons que les données utilisateur soient accessibles dans data.user
  const { name, userName, bio, github, linkedin, website } = data.user;

  const handleSave = () => {
    // Récupérer les nouvelles valeurs des champs d'entrée
    const newUserName = document.getElementById("userName").value;
    const newEmail = document.getElementById("bio").value;
  
    // Implémenter la logique pour enregistrer les modifications
    // Par exemple, vous pouvez envoyer ces données à un serveur
    // ou les enregistrer localement
  
    // Une fois que les modifications sont enregistrées, vous pouvez rediriger l'utilisateur vers la page de profil
    window.location.href = "/profile";
  };

  return (
    <ProfileInfoContainer>
      <Title>Informations de profil</Title>
      <InfoText>Ces informations apparaîtront sur votre profil public Devpost.</InfoText>

      <ProfileImageContainer>
        {/* Image de profil */}
        <ProfileImage src={data.user.img} alt="Profile" />
        {/* Lien pour télécharger une photo */}
        <UploadPhotoLink to="/profile/edit/upload-photo">Télécharger une photo</UploadPhotoLink>
      </ProfileImageContainer>

      {/* Inputs pour le nom et prénom */}
      <Info>
        <InputContainer>
          <Label>Nom</Label>
          <InputInfo defaultValue={name} />
        </InputContainer>
        <InputContainer>
          <Label>Nom d'utilisateur</Label>
          <InputInfo id="userName" defaultValue={userName} />
        </InputContainer>
      </Info>

      {/* Input pour la bio */}
      <InputContainer>
        <Label>Bio</Label>
        <Textarea id="bio" defaultValue={bio} />
      </InputContainer>

      <Title>Social</Title>

      {/* Inputs pour GitHub et LinkedIn */}
      <Info>
        <InputContainer>
          <Label>GitHub</Label>
          <InputInfo defaultValue={github} />
        </InputContainer>
        <InputContainer>
          <Label>LinkedIn</Label>
          <InputInfo defaultValue={linkedin} />
        </InputContainer>
      </Info>

      {/* Input pour le site Web */}
      <InputContainer>
        <Label>Site Web</Label>
        <Input defaultValue={website} />
      </InputContainer>

      {/* Boutons pour enregistrer les modifications ou annuler */}
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
