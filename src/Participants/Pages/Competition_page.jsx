import styled from "styled-components";
import { ORANGE_COLOR } from "../../style/Colors";
import { Routes, Route, useLocation, useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

import Cover_competition from "../Components/competitionPage/Cover_competition";
import Dashboard_competition from "../Components/competitionPage/Dashboard_competition";
import Overview from "./Overview";
import MyProject_competition from "./MyProject_competition";
import Participants_comp from "../Components/competitionPage/participant/Participants_comp";
import Resources from "./Resources";
import Rules from "./Rules";
import ProjectGallery from "./ProjectGallery";
import Discussions from "./Discussions";
import StepsCompetition_page from "./StepsCompetition_page";
import LeaderCreateProject from "./LeaderCreateProject";
import ManageTeam from "../Components/competitionPage/team/ManageTeam";
const Competition_page = () => {
  const location = useLocation();
  const { id } = useParams();
  const connectedUser = JSON.parse(localStorage.getItem("user"));
  const isLogged = localStorage.getItem("user");
  const [joinedCompetition, setJoinedCompetition] = useState(null);
  const [data, setData] = useState(null);
  const [hasATeam, setHasATeam] = useState(null);
  const [hasAProject, setHasAProject] = useState(null);
  const [isLeader, setIsLeader] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(null);
  // const [isADistance, setIsAsDistance] = useState(null);
  const getTeamInfo = async (teamId) => {
    const url = `http://localhost:5299/api/groups/${teamId}`;
    try {
      const response = await axios.get(url);
      if (response.data) {
        setTeamName(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    const fetchCompetition = async () => {
      const url = `http://localhost:5299/url/${id}?ParticipantInfo=true`;
      try {
        const response = await axios.get(url);
        setData(response.data);
        const connectedUser = JSON.parse(localStorage.getItem("user"));
        const userId = connectedUser.id;
        if (response?.data) {
          console.log(response.data)
          const participants = response?.data?.participants.$values;

          const userParticipant = participants.find(
            (participant) => participant.userId === userId
          );
          setJoinedCompetition(userParticipant);
          console.log("user Participant", userParticipant)
          setIsConfirmed(userParticipant.isConfirmed);
          setHasATeam(userParticipant.groupId);
          setIsLeader(userParticipant.isLeader);
          if (userParticipant.groupId) {
            getTeamInfo(userParticipant.groupId);
          }
          // setIsADistance(response.data.location == 0 ? false : true)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCompetition();
  }, []);
console.log("joined competition" , joinedCompetition)

  return (
    <CompetitionStyle>
      {data && (
        <>
          <Cover_competition data={data} />
          <div className="content">
            <Dashboard_competition />
            <Routes location={location} key={location.pathname}>
              <Route
                path="overview"
                element={
                  <Overview
                    isConfirmed={isConfirmed}
                    teamName={teamName}
                    isLeader={isLeader}
                    setJoinedCompetition={setJoinedCompetition}
                    data={data}
                    isLogged={isLogged}
                    hasATeam={hasATeam}
                    joinedCompetition={joinedCompetition}
                    hasAProject={hasAProject}
                    setHasAProject={setHasAProject}
                  />
                }
              />
              <Route
                path="/participants"
                element={
                  <Participants_comp
                    data={data}
                    setJoinedCompetition={setJoinedCompetition}
                    joinedCompetition={joinedCompetition}
                  />
                }
              />
              <Route
                path="/resources"
                element={
                  <Resources
                    data={data}
                    joinedCompetition={joinedCompetition}
                  />
                }
              />
              <Route
                path="/rules"
                element={
                  <Rules data={data} joinedCompetition={joinedCompetition} />
                }
              />
              <Route
                path="/projectGallery"
                element={
                  <ProjectGallery
                    data={data}
                    joinedCompetition={joinedCompetition}
                  />
                }
              />
              <Route
                path="/discussions"
                element={
                <Discussions joinedCompetition={joinedCompetition} 
                />
              }
              />
              <Route
                path="/createProject/"
                element={
                  <LeaderCreateProject
                    data={data}
                    setHasATeam={setHasATeam}
                    hasATeam={hasATeam}
                    joinedCompetition={joinedCompetition}
                    hasAProject={hasAProject}
                    setHasAProject={setHasAProject}
                  />
                }
              />
             
              <Route
                path="/myProject"
                element={
                  <MyProject_competition
                    data={data}
                    isLogged={isLogged}
                    setJoinedCompetition={setJoinedCompetition}
                    joinedCompetition={joinedCompetition}
                    hasATeam={hasATeam}
                    setHasATeam={setHasATeam}
                    hasAProject={hasAProject}
                    setHasAProject={setHasAProject}
                    isLeader={isLeader}
                  />
                }
              />
              <Route
                path="/myTeam"
                element={
                  <ManageTeam
                    teamName={teamName}
                    connectedUser={connectedUser}
                    isLeader={isLeader}
                    data={data}
                    isLogged={isLogged}
                    setJoinedCompetition={setJoinedCompetition}
                    joinedCompetition={joinedCompetition}
                    hasATeam={hasATeam}
                    setHasATeam={setHasATeam}
                    hasAProject={hasAProject}
                    setHasAProject={setHasAProject}
                  />
                }
              />
               <Route
                path="/steps/:step/"
                element={
                  <StepsCompetition_page
                    data={data}
                    hasATeam={hasATeam}
                    joinedCompetition={joinedCompetition}
                  />
                }
              /> 
             
            </Routes>
          </div>
        </>
      )}
    </CompetitionStyle>
  );
};

const CompetitionStyle = styled.div`
  .content {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
  a {
    color: ${ORANGE_COLOR};
  }
`;

export default Competition_page;
