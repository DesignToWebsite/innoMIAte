import styled from "styled-components";

import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { BtnCreateProject } from "../Pages/CreateProject";
import axios from "axios";
import JoinCompetitionBtn from "../JoinCompetitionBtn";
import { GREEN_COLOR, RED_COLOR } from "../../style/Colors";

const CompInfoOverview = ({
  isConfirmed,
  teamName,
  data,
  isLogged,
  joinedCompetition,
  setJoinedCompetition,
  hasATeam,
  hasAProject,
  setHasAProject,
  isLeader,
}) => {
  console.log(isConfirmed)
  // console.log(joinedCompetition)
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const EditProject = async (e) => {
    navigate(`/competition/${id}/myProject`);
  };
  const ManageTeam = async (e) => {
    navigate(`/competition/${id}/myProject`);
  };
  const ManageTeamMiathon = async (e) => {
    navigate(`/competition/${id}/myTeam`);
  };
  return (
    <Info>
      <div className="info">
        <div className="organisateur">
          <p>Organisée par : </p>
          <div className="logos">
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

        {!isConfirmed && (
          <p className="activeYouEmail">
            Activé votre inscription à la réception
          </p>
        )}

        {isConfirmed && joinedCompetition && isLeader && (
          <button onClick={ManageTeamMiathon} className="btn btn-red">
            Gérer l'équipe
          </button>
        )}

        {isConfirmed && joinedCompetition && !isLeader && (
          <>
            <p className="joined">Rejoint</p>
            {!hasATeam && (
              <p className="small">
                Vous devez rejoindre une équipe, trouver un chef de projet et être membre de
                son équipe
              </p>
            )}
            {hasATeam && (
              <p className="small">
                Vous êtes membre de l'équipe <b>{teamName?.name} </b>
              </p>
            )}
          </>
        )}

        {/* {!joinedCompetition && (
          <JoinCompetitionBtn
            isLogged={isLogged}
            joinedCompetition={joinedCompetition}
            setJoinedCompetition={setJoinedCompetition}
            data={data}
          />
        )}
        {joinedCompetition && hasATeam && (
          <button onClick={EditProject} className="btn btn-green">
            Edit project
          </button>
        )}

        {joinedCompetition && !hasATeam && (
          <button onClick={ManageTeam} className="btn btn-green">
            Create a team OR Join a team
          </button>
        )} */}
      </div>
    </Info>
  );
};

const Info = styled.div`
  .activeYouEmail {
    background-color: ${RED_COLOR};
    width: fit-content;
    color: white;
    padding: 0.5em 1em;
    margin: 1em 0;
  }
  .joined {
    margin-top: 1em;
    padding: 0.5em 1.5em;
    background-color: ${GREEN_COLOR};
    width: fit-content;
    color: white;
    margin-bottom: 0;
  }
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
    p {
      padding: 0;
      margin: 0;
    }
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 2em;
    div.logos {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 10px;
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
