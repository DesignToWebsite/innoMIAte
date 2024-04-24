import React from "react";
import styled from "styled-components";
import { RED_COLOR, GREEN_COLOR } from "../../style/Colors";
import iconTimer from "../../assets/icons/iconTimer.png"
import iconWatch from "../../assets/icons/iconWatch.png"
import iconTeam from "../../assets/icons/iconTeam.png"
import iconCalendar from "../../assets/icons/iconCalendar.png"

const HackathonCard = ({ competition, index }) => {
    const backgroundColor = index % 2 === 0 ? '#AF0000' : '#02481C';
  
    return (
      <CardContainer background={backgroundColor}>
      <ImageContainer>
        <HackathonImage src={competition.project.img} alt={competition.title} />
      </ImageContainer>
      <HackathonInfo>
        <HackathonName>{competition.title}</HackathonName>
        <DeadlineContainer>
          <Icon src={iconTimer}></Icon>
          <DeadlineTime>About 7 hours left </DeadlineTime>
        </DeadlineContainer>
        <Info>
            <Prize>{competition.prizes.join(", ")}</Prize>
            <Participants>{competition.participants} participants</Participants>
        </Info>
        <ButtonsContainer>
          <InspectButton>Inspect</InspectButton>
          <DraftSubmissionButton>Draft Submission</DraftSubmissionButton>
        </ButtonsContainer>
      </HackathonInfo>
      <AdditionalInfo>
        <Additional>
            <IconInfoCalendar src={iconCalendar} />
            <TimeLeft>{competition.timeLeft}</TimeLeft>
        </Additional>
        <Additional>
            <IconInfo src={iconTeam} />
            <TeamName>{competition.team.TeamName} Team</TeamName>
        </Additional>
        <Additional>
            <IconInfo src={iconWatch} className={competition.team.complete ? "complete-icon" : "incomplete-icon"} />
            <TeamState>{competition.team.complete ? "Team Completed" : "1 Team member left "}</TeamState>
        </Additional>
      </AdditionalInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  background-color: ${({ background }) => background};
  width: 85vw;
  height: 45%;
  position: relative;
`;

const ImageContainer = styled.div`
  height: 100px;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 20px;
  overflow: hidden;
  border-radius: 10px;
`;

const HackathonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HackathonInfo = styled.div`
  padding: 20px;
  margin-left: 20px;
  color: aliceblue;
`;

const HackathonName = styled.h3`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: bold;
 font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const DeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #AF0000;
  border-radius: 50px;
  padding: 0px 10px;
  width: 14vw;
`;

const DeadlineTime = styled.span`
  color: aliceblue;
  font-style: italic;

`;

const Prize = styled.div`
  margin-bottom: 10px;
`;

const Participants = styled.div`
  margin-bottom: 10px;
  margin-left: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const InspectButton = styled.button`
  padding: 0px 30px;
  margin-top: 10px;
  background-color: #fcfdfe;
  color:  #02481C;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DraftSubmissionButton = styled.button`
  padding: 0px 10px;
  margin-top: 10px;
  background-color: #fcfdfe;
  color: #AF0000;
  border: 1px solid #02481C;
  border-radius: 4px;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: aliceblue;
`;

const Additional = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 10px;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const Icon = styled.img`
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-right: 5px;
`;

const IconInfo = styled.img`
width: 20px;
height: 11px;
display: inline-block;
margin-right: 20px;
`;

const IconInfoCalendar = styled.img`
width: 20px;
height: 25px;
display: inline-block;
margin-right: 20px;
`;

const TimeLeft = styled.span`
  flex: 1;
  margin-left: 5px;
  font-weight: bold;
  font-size: 18px;
`;

const TeamName = styled.span`
  flex: 1;
  margin-left: 5px;
  font-weight: bold;
  font-size: 18px;
`;

const TeamState = styled.span`
  flex: 1;
  margin-left: 5px;
  font-weight: bold;
  font-size: 18px;
`;

export default HackathonCard;
