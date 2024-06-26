import styled from "styled-components";

import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { BtnCreateProject } from "../../../Pages/CreateProject";
import axios from "axios";
import JoinCompetitionBtn from "../../../JoinCompetitionBtn";
import { GREEN_COLOR, RED_COLOR } from "../../../../style/Colors";

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
            <a target="_blank" href={data.pdfRules}>
              Voir le règlement complet
            </a>
          </div>
        </div>


       

        {isConfirmed && joinedCompetition && isLeader && (
          <button onClick={ManageTeamMiathon} className="btn btn-red">
            Gérer l'équipe
          </button>
        )}

        

        {!joinedCompetition && (
          <JoinCompetitionBtn
            isLogged={isLogged}
            joinedCompetition={joinedCompetition}
            setJoinedCompetition={setJoinedCompetition}
            data={data}
          />
        )}

        {joinedCompetition && hasATeam && isLeader && (
          <button onClick={EditProject} className="btn btn-green">
            Votre projet
          </button>
        )}

        {joinedCompetition && !hasATeam && (
          <button onClick={ManageTeam} className="btn btn-green">
            Créer une équipe OU Rejoindre une équipe
          </button>
        )}
        
         {joinedCompetition && !isLeader && (
          <>
            {!hasATeam && (
              <p className="small">
                Vous devez rejoindre une équipe, trouver un chef de projet et être membre de
                son équipe
              </p>
            )}
            {hasAProject && (
              <p className="small">
                Vous êtes membre de l'équipe <b>{teamName?.name} </b>
              </p>
            )}
          </>
        )}
      </div>
    </Info>
  );
};

const Info = styled.div`
  /* .joined {
    margin-top: 1em;
    padding: 0.5em 1.5em;
    background-color: ${GREEN_COLOR};
    width: fit-content;
    color: white;
    margin-bottom: 0;
  } */
  .info {
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
      margin-right: 10px;
    }
  }
  .isParticipant {
    display: grid;
    align-items: center;
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
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
