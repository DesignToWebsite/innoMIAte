import styled from "styled-components";

import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { BtnCreateProject } from "../Pages/CreateProject";

const CompInfoOverview = ({ data, isLogged, joinedCompetition, setJoinedCompetition }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams()

  const addProject = async (e) => {
    if (isLogged) {
      const connectedUser = JSON.parse(localStorage.getItem('user'));
      const competition = {
        competitionId: id,
        project: {
          name: "Sans titre",
          description: "Pas de description",
          team: [],
          img: "data:image/jpeg"
        }
      };

      // Fetch the user data from the server using the connectedUser's ID
      fetch(`http://localhost:8000/user/${connectedUser.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((res) => res.json()) 
        .then((data) => {
          console.log(data)
          if (data.competition) {
            data.competition.push(competition);
            // console.log(data)

            // Update the user data on the server
            fetch(`http://localhost:8000/user/${connectedUser.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then(() => {

                console.log("Competition added to user successfully.");
                setJoinedCompetition(true)
                navigate(`/competition/${id}/createProject`)

              })
              .catch((error) => {
                console.error("Error updating the user data: ", error);
              });
          } else {
            console.error("User data not found or user.competition array is missing.");
          }
        })
        .catch((error) => {
          console.error("Error fetching the user data: ", error);
        });

    } 
    else {
      navigate("/login", {
        state: { from: location.pathname }
      })
    }
    // navigate(`/competition/${id}/steps`);
  };

  const EditProject = async(e)=>{
    navigate(`/competition/${id}/steps`)
  }
  return (
    <Info>
      <div className="info">
        <h1>{data.title}</h1>
        <h3>{data.smallDescription}</h3>
        <div className="isParticipant">
          <div className="whoCanParticipate">
            <p>Qui peut participer</p>
            <div className="items">
              <ul>
                <li>- 18 ans et plus seulement</li>
                <li>- Tous les pays/territoires</li>
              </ul>
            </div>
            <a href="#">Voir le règlement complet</a>
          </div>
          
        </div>

        {!joinedCompetition &&
          <button onClick={addProject} className="btn btn-red">
            Rejoignez le hackathon
          </button>
        }
{
            joinedCompetition &&
            <button onClick={EditProject} className="btn btn-green">
            Edit project
          </button>
          }
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
  .isParticipant{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    /* flex-direction: row-reverse; */
    .whoCanParticipate{
      order: 2;
    }
    button{
      margin: 5px !important;
    }
  }
`;

export default CompInfoOverview;
