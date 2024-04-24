import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RED_COLOR, GREEN_COLOR } from "../../style/Colors";

const PasswordChange = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Le nouveau mot de passe et la confirmation ne correspondent pas.");
    } else if (newPassword.length < 8) {
      setError("Les mots de passe doivent comporter au moins 8 caractères.");
    } else {
      // Logic to handle password change
      setError("");
      // Reset input fields
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  const handleCancel = () => {
    // Clear all input fields
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setError("");
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
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Label>Nouveau mot de passe</Label>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Label>Confirmer le nouveau mot de passe</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputContainer>

        <ErrorMessage>{error}</ErrorMessage>

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
  display: flex;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: ${GREEN_COLOR};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: ${RED_COLOR};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export default PasswordChange;
