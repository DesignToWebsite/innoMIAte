import React from "react";
import styled from "styled-components";

const NewProjectAlert = ({
  onCancel,
  onYesClick,
  onNoClick,
  competitions,
  onSelectHackathon,
  selectedHackathonId,
}) => {
  const handleHackathonSelection = (competition) => {
    onSelectHackathon(competition);
  };

  return (
    <AlertContainer>
      <CancelButton className="cancel-btn" onClick={onCancel}>
        X
      </CancelButton>
      <Title>Is this project part of a hackathon?</Title>
      <ButtonContainer>
        <Button onClick={onYesClick}>Yes, I'm submitting to a hackathon</Button>
        <NOButton onClick={onNoClick}>No, I'm just adding it to my portfolio</NOButton>
      </ButtonContainer>
      <Title>Select a hackathon</Title>
      <Description>
        You can keep editing your project after you submit it, but you must submit to demo / be
        eligible for prizes.
      </Description>
      <HackathonList>
        {competitions.map((competition) => (
          <HackathonItem
            key={competition.id}
            className={selectedHackathonId === competition.id ? "selected" : ""}
          >
            {/* You can modify the following based on the structure of your competition data */}
            <HackathonImage src={competition.img} alt={competition.title} />
            <HackathonInfo>
              <HackathonName onClick={() => handleHackathonSelection(competition)}>
                {competition.title}
              </HackathonName>
              <HackathonStatus>{competition.place}</HackathonStatus>
            </HackathonInfo>
          </HackathonItem>
        ))}
      </HackathonList>
    </AlertContainer>
  );
};

const AlertContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f0ebeb;
  color: #02481c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  color: red;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const NOButton = styled(Button)`
  background-color: #f9fafb;
  color: #02481c;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
`;

const HackathonList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HackathonItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  &.selected {
    background-color: #aca4a4;
  }
`;

const HackathonImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const HackathonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const HackathonName = styled.span`
  font-weight: bold;
`;

const HackathonStatus = styled.span`
  color: #28a745; /* Green color for online */
  /* Add styles for offline hackathons if needed */
`;

export default NewProjectAlert;
