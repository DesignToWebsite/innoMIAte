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
          img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0PDg0NDQ0NDQ0NDQ8NDQ4NFhEWFhURExMYHSggGBolGxUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBAUH/8QAMBABAQACAAIGCAcBAQAAAAAAAAECEQMEEiExQVJxFTJRYWKRobEFExQigZKi0XL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/RAAAAAAAAAADQ0GaNNAZo0oBOjSzQI0adDQOejTpo0Dno0vRoEaNLYCdGlMBg2sAAAAAAAAAAAAAAAAAAAAAayKBjRoDdEipATpulaboE6NLkNAjRpejQIZpemaBGmLsZYCBVTQZWNYAAAAAAAAAAAAAAAAAAAABFJioDWyEVAFSEipAZMVSNkVICZG6Xo0COizTthw7l1SW+UdOLyuWGPSuu3Wu2wHk0yx1sTYDlYyulibAc9JrpU0EJVUgAAAAAAAAAAAAAAAAAAAARcRF4gqKjIuA2RWMZHfg8HLL1cbff3fMESKmL28LkPHf4x/69Mxw4fZjd+7G2/MHi4XKZ5d2p7+p6ceUwx68rvz6ozPj8S+rhZ77La4ZY53rsyvnKD0Zc1hj1YzflNRWN/N4dl7bueV7nk/Ly8N+Vd+U3LZZdWey9oPBcU2PbzXBvStktl6+qb63C8HPwZf1oPNYmx1sRYDlU10sRkDlUrqAAAAAAAAAAAAAAAAAAAAAI6YucdMQXF4oi8Qev8AD5jc9ZSXc6t+17+Z5n8vUmPbOr2Pk8PKyyztllj6nN49PhzOd2sv47wOT4uWeWXSvdNTuis+a6Ns6O9X2uX4d25eUc+P6+XmD0fq/h+p+q+H6rnLY613+3byZTVs9lsB6f1Xw/Vl5v4fq8yuJhcdb75sHa858P1duX43T31a179vn16uQ7MvOfYHg4vrZed+7lXbi+tfO/dxoIrnXSudBzyRV5IoAAAAAAAAAAAAAAAAAAAAEdMXOOmILi8XOLgLj6n4fn0sLhe77V8qPVyXF6OePsv7b/IPXyWHRzzxvc48f18vN75w9Z3L24yXzj5/Mevl5g7Y8zlJrq8+9y2rluF07u+rO2+33PTxOWl7P2/YHPluFu7vZOz316eJw5lOvuVjjJJJ2RoPnc1h0curss3HbkOzLzn2bz+O8Zl7L9Kn8OvVl5wHh4vrXzv3csl8W/uy8793Ogioq7UZA55IXkgAAAAAAAAAAAAAAAAAAAACLiIqAuKiIqA6Sqlc5VSg+7yvE6eGN79avnHh5jDLp5axys32yVz5Tm/y5ZZuXr7dar0+kp4L/YDHmOJJqcPUnw5N/VcXwf5yPSM8H1PSM8F+YN/VcTwf5yZ+q4vg/wA5HpGeC/M9IzwfUE8Tj8TKWXDqvV6uTr+HY2TLcs652zTn6SngvzZ6Tngv9geHi392X/q/dztbnlu2+22otBlTk2poIqVVIAAAAAAAAAAAAAAAAAAAAEVEqBqpUNBcqtucqtguVUrnK3YOkrduezYOmzbn0i0FbZck7ZsG2stZtloFqaUBiWsAAAAAAAAAAAAAAAAAAAAAaxoDWAKakBcptICzaGgrZtIDdm07Ng3bGAAMArG1gAAAAAAAAAAAAAAAAAAAABsAaMAaMAUJAUJAUJAUJAaMAaMAbWAAAAAAAAAAAD//2Q=="
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
                navigate(`/competition/${id}/steps`)

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
      <div className="organisateur">
          <p>Organisée par la <span>{data.mainOrganizer} </span></p>
          <div className="logo">
            <img src={data.mainOrganizerImg} alt="" />
          </div>
        </div>
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
  .organisateur{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      span{
        font-weight: 600;
      }
      img{
        width: 90px;
      }
    }
`;

export default CompInfoOverview;
