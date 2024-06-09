import styled from "styled-components";
import Cover_competition from "../Components/Cover_competition";
import Dashboard_competition from "../Components/Dashboard_competition";
import Overview from "./Overview";
import { ORANGE_COLOR } from "../../style/Colors";
import { Routes, Route, useLocation, useParams } from "react-router";
import MyProject_competition from "./MyProject_competition";
import { useEffect, useState } from "react";
import Participants_comp from "../Components/Participants_comp";
import Resources from "./Resources";
import Rules from "./Rules";
import ProjectGallery from "./ProjectGallery";
import Discussions from "./Discussions";
import CreateProject_step from "../Components/CreateProject_step";
import StepsCompetition_page from "./StepsCompetition_page";
import axios from "axios";
import LeaderCreateProject from "./LeaderCreateProject";
import ManageTeam from "../Components/ManageTeam";
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
  // console.log(data.participants.$values)
  useEffect(() => {
    const fetchCompetition = async () => {
      const url = `http://localhost:5299/url/${id}?ParticipantInfo=true`;
      try {
        const response = await axios.get(url);
        setData(response.data);
        const participants = response?.data?.participants.$values;
        const connectedUser = JSON.parse(localStorage.getItem("user"));
        const userId = connectedUser.id;
        // console.log(participants)
        if (response?.data) {
          const userParticipant = participants.find(
            (participant) => participant.userId === userId
          );
          // console.log("user participant", userParticipant);
          setJoinedCompetition(userParticipant);
          setHasATeam(userParticipant.groupId);
          setIsLeader(userParticipant.isLeader);
          if (userParticipant.groupId) {
            getTeamInfo(userParticipant.groupId);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCompetition();
  }, []);

  // console.log(hasATeam);
  // console.log("jpine", joinedCompetition)
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

              {/* <Route
                path="/participants"
                element={
                  <Participants_comp
                    data={data}
                    setJoinedCompetition={setJoinedCompetition}
                    joinedCompetition={joinedCompetition}
                  />
                }
              /> */}
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
              {/* <Route
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
                element={<Discussions joinedCompetition={joinedCompetition} />}
              /> */}
              {/* <Route
                path="/myProject"
                element={
                  <MyProject_competition
                    data={data}
                    isLogged={isLogged}
                    setJoinedCompetition={setJoinedCompetition}
                    joinedCompetition={joinedCompetition}
                    hasATeam={hasATeam}
                    setHasATeam={setHasATeam}
                    hasAProject={hasAProject} setHasAProject={setHasAProject}
                  />
                }
              /> */}
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
              {/* <Route
                path="/createProject/"
                element={
                  <LeaderCreateProject
                    data={data}
                    setHasATeam={setHasATeam}
                    hasATeam={hasATeam}
                    joinedCompetition={joinedCompetition}
                    hasAProject={hasAProject} setHasAProject={setHasAProject}

                  />
                }
              /> */}

              {/* <Route
                path="/steps/:step/"
                element={
                  <StepsCompetition_page
                    data={data}
                    hasATeam={hasATeam}
                    joinedCompetition={joinedCompetition}
                  />
                }
              /> */}
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
