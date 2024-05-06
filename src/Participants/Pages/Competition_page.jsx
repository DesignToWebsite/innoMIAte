import styled from "styled-components";
import Cover_competition from "../Components/Cover_competition";
import Dashboard_competition from "../Components/Dashboard_competition";
import Overview from "./Overview";
import { ORANGE_COLOR } from "../../style/Colors";
import { Routes, Route, useLocation, useParams } from "react-router";
import MyProject_competition from "./MyProject_competition";
import { useEffect, useState } from "react";
import Participants_comp from "../Components/Participants_comp";
import Ressources from "./Ressources"
import Rules from "./Rules";
import ProjectGallery from "./ProjectGallery";
import Discussions from "./Discussions";
import CreateProject_step from "../Components/CreateProject_step";
import StepsCompetition_page from "./StepsCompetition_page";
const Competition_page = () => {
  const location = useLocation();
  const { id } = useParams();

  const connectedUser = JSON.parse(localStorage.getItem('user'))
  const isLogged = localStorage.getItem("user");

  const [joinedCompetition, setJoinedCompetition] = useState(false)
  const [data, setData] = useState(null);

  useEffect(() => {
    if (isLogged) {
      // SEE IF THE USER IS CONNECTED To the competition
      fetch(`http://localhost:8000/user?id=${connectedUser.id}`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data)
          const userInfo = data[0]
          if (userInfo.competition) {
            const competitions = userInfo.competition;
            competitions.forEach(item => {
              if (item.competitionId == id) {
                console.log("logged to a competition")
                setJoinedCompetition(true)
              }
            });
          } else {
            console.log("is not")
          }
        })
    }

    //GET THE COMPETITION DATA FROM THE API
    fetch(`http://localhost:5299/api/Competition/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        // console.log(data)
      });

    // const fetchData = 
  }, [])

  return (
    <CompetitionStyle>
      {data &&
        <>
          <Cover_competition />
          <div className="content">
            <Dashboard_competition />
            <Routes location={location} key={location.pathname}>
              <Route path="overview" element={<Overview  data={data} isLogged={isLogged} setJoinedCompetition={setJoinedCompetition} joinedCompetition={joinedCompetition} />} />
              <Route
                path="/myProject"
                element={<MyProject_competition data={data} isLogged={isLogged}  setJoinedCompetition={setJoinedCompetition} joinedCompetition={joinedCompetition} />}
              />
              <Route path="/participants" element={<Participants_comp data={data} setJoinedCompetition={setJoinedCompetition} joinedCompetition={joinedCompetition} />} />
              <Route path="/ressources" element={<Ressources joinedCompetition={joinedCompetition} />} />
              <Route path="/rules" element={<Rules joinedCompetition={joinedCompetition} />} />
              <Route path="/projectGallery" element={<ProjectGallery joinedCompetition={joinedCompetition} />} />
              <Route path="/discussions" element={<Discussions joinedCompetition={joinedCompetition} />} />

              <Route path="/steps" element={<StepsCompetition_page joinedCompetition={joinedCompetition} />} />

            </Routes>
          </div>
        </>}

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
