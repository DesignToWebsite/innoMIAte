import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RED_COLOR, GREEN_COLOR } from "../../style/Colors";

const PasswordChange = () => {
  // Initialize state from localStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const [oldPassword, setOldPassword] = useState(user.password);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [savedData, setSavedData] = useState(user);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSavedData((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  // Function to save changes
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Le nouveau mot de passe et la confirmation ne correspondent pas.");
    } else if (newPassword.length < 8) {
      setError("Les mots de passe doivent comporter au moins 8 caractères.");
    } else {
      
      
      // Assuming the old password is correct and updated successfully
      setUser((prevUser) => ({
        ...prevUser,
        password: newPassword,
      }));
      const url = `http://localhost:5299/api/User/${user.id}`
    try{
      const response = await axios.put(url, savedData)
      if(response.data){
       localStorage.setItem('user', JSON.stringify(savedData));
        window.location.href = "/profile"; // Redirect to profile page

      }
    }catch(error){
      console.log(error)
    }
      

      // Reset input fields and error
      setError("");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      window.location.href = "/profile"; // Redirect to profile page
    }
  };

  const handleCancel = () => {
    // Clear input fields and error
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");
    window.location.href = "/profile"; // Redirect to profile page

  };

  return (
    <PasswordChangeContainer>
      <Title>Changer votre mot de passe</Title>
      <InfoText>Les mots de passe doivent comporter plus de 8 caractères.</InfoText>
      <Subtitle>Créer un nouveau mot de passe</Subtitle>

      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Ancien mot de passe</Label>
          <Input
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Label>Nouveau mot de passe</Label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Label>Confirmer le nouveau mot de passe</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </InputContainer>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <ButtonContainer>
          <SaveButton type="submit">Enregistrer les modifications</SaveButton>
          <CancelButton type="button" onClick={handleCancel}>Annuler</CancelButton>
        </ButtonContainer>
      </Form>
    </PasswordChangeContainer>
  );
};

const PasswordChangeContainer = styled.div`
  margin-top: 20px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`;

const Title = styled.h3`
  color: ${RED_COLOR};
  margin-bottom: 10px;
`;

const Subtitle = styled.h4`
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin-top: 10px;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const InfoText = styled.p`
  color: #666;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ErrorMessage = styled.p`
  color: ${RED_COLOR};
  margin-bottom: 10px;
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

const SavedDataContainer = styled.div`
  margin-top: 20px;
`;

const TitleSmall = styled.h4`
  color: #000;
  margin-top: 20px;
`;

export default PasswordChange;
