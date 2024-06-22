import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ORANGE_COLOR } from '../../../style/Colors';

// Keyframe animation for sliding in the notification
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components for notification popup
const StyledNotification = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  background-color: ${ORANGE_COLOR};
  color: white;
  padding: 15px;
  /* border-radius: 5px; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  animation: ${slideIn} 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  p{
    margin: 0;
    padding: 0;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const Popup = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <>
      {isVisible && (
        <StyledNotification>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <p>{message}</p>
        </StyledNotification>
      )}
    </>
  );
};

export default Popup;
