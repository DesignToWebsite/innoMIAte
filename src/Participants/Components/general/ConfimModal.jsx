import React from 'react';
import styled from 'styled-components';

const ConfirmModal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Confirmer la suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer ce projet ?</p>
        <ButtonContainer>
          <button onClick={onClose} className="btn btn-gray">Annuler</button>
          <button onClick={onConfirm} className="btn btn-red">Supprimer</button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 25px 20px;
  border-radius: 5px;
  max-width: 400px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  .btn-gray {
    background-color: gray;
    color: white;
  }
`;

export default ConfirmModal;
