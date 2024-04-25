import styled from "styled-components";

import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const CompInfoOverview = ({ data }) => {
  const navigate = useNavigate();
  const {id} = useParams()
  const addProject = async (e) => {
    localStorage.setItem("projectExist", true);
    // useEffect(() => {
    //   fetch("http://localhost:8000/user", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   })
    //     .then((res) => {
    //       res.json();
    //     })
    //     .then((data) => {
    //       console.log("New user created : ", data);
    //     })
    //     .catch((error) => {
    //       console.error("Error creating new item: ", error);
    //     });

    //   navigate("/login");
    // }, []);
    navigate(`/competition/${id}/steps`);
  };
  return (
    <Info>
      <div className="info">
        <h1>{data.title}</h1>
        <h3>{data.smallDescription}</h3>
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
        {
          <button onClick={addProject} className="btn btn-red">
            Rejoignez le hackathon
          </button>
        }{" "}
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
        /* width: 80%; */
        ul {
          font-size: 15px;
          display: flex;
          flex-wrap: wrap;
          li {
            margin-right: 5em;
          }
          /* justify-content: space-around; */
        }
      }
    }
    .btn {
      margin-top: 1.5em;
      margin-bottom: 2em;
    }
  }
`;

export default CompInfoOverview;
