import styled from "styled-components";

import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { BtnCreateProject } from "../Pages/CreateProject";
import axios from "axios";
import AddProjectBtn from "../AddProjectBtn";

const CompInfoOverview = ({
  data,
  isLogged,
  joinedCompetition,
  hasATeam,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
 
  const { id } = useParams();

  const participants = data.participants.$values;
  const connectedUser = JSON.parse(localStorage.getItem("user"));
  const userId = connectedUser.id;
  
  // const findParticipantByUserId = (participants, userId) => {
  //   return participants.find((participant) => participant.userId === userId);
  // };

  // const hasATeam = (participants, userId) => {
  //   return participants.find((participant) => participant.userId === userId)
  //     .teamId;
  // };

  const EditProject = async (e) => {
    navigate(`/competition/${id}/steps`);
  };
  const ManageTeam = async (e)=>{
    navigate(`/competition/${id}/steps/manageTeam`);
  }
  return (
    <Info>
      <div className="info">
        <div className="organisateur">
          <p>Organisée par : </p>
          {data.organizers.$values.map((item, key) => {
            return (
              <div key={key}>
                <span>{item.name} </span>
                <div className="logo">
                  <img src={item.imageUrl} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <h1>{data.name}</h1>

        <h3>{data.descriptionTop}</h3>

        <div className="isParticipant">
          <div className="whoCanParticipate">
            <p>Qui peut participer</p>
            <div className="items">
              <ul>
                <li>- 18 ans et plus seulement</li>
                <li>- Tous les pays/territoires</li>
              </ul>
            </div>
            <a target="_blank" href={data.pdfRules}>
              Voir le règlement complet
            </a>
          </div>
        </div>

        {!joinedCompetition && (
          <AddProjectBtn
            isLogged={isLogged}
            joinedCompetition={joinedCompetition}
            setJoinedCompetition={setJoinedCompetition}
            data={data}
          />
        )}
        {joinedCompetition &&
          hasATeam && (
            <button onClick={EditProject} className="btn btn-green">
              Edit project
            </button>
          )}

        {joinedCompetition &&
          !hasATeam && (
            <button onClick={ManageTeam} className="btn btn-green">
              Create a team OR Join a team
            </button>
          )}
      </div>
    </Info>
  );
};

const Info = styled.div`
  .info {
    padding: 0em 2em;
    h3 {
      font-size: 1.4em;
    }
    .whoCanParticipate {
      padding-top: 15px;
      p {
        font-size: 15px;
      }
      .items {
        ul {
          font-size: 15px;
          display: flex;
          flex-wrap: wrap;
          li {
            margin-right: 5em;
          }
        }
      }
    }
    .btn {
      margin-top: 1.5em;
      margin-bottom: 2em;
    }
  }
  .isParticipant {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    align-items: center;
    /* flex-direction: row-reverse; */
    .whoCanParticipate {
      order: 2;
    }
    button {
      margin: 5px !important;
    }
  }
  .organisateur {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    div {
      display: flex;
      align-items: center;
      span {
        font-weight: 600;
        margin-right: 10px;
      }
      img {
        width: 90px;
        height: 50px;
      }
    }
  }
`;

export default CompInfoOverview;
