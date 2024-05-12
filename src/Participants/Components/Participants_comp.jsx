import styled from "styled-components";
import usersIcon from "../../assets/dashboard_competition/Users.png";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import userImage from "../../assets/Profile/user.png"
import SearchParticipant from "./SearchParticipant";


const Participants_comp = () => {
  const logged = localStorage.getItem("user");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchCompetitionParticipant = async () => {
      const url = `http://localhost:5299/url/${id}?ParticipantInfo=true`;
      try {
        const response = await axios.get(url);
        console.log(
          "Response data Participant:",
          response.data.participants.$values
        );
        setData(response.data.participants.$values);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCompetitionParticipant();
  }, []);

  const goToTheLoginPage = () => {
    navigate("/login");
  };
  return (
    <Participants>
      {!logged && (
        <div className="message">
          <img src={usersIcon} alt="" />
          <p>
            Veuillez vous connecter pour parcourir les participants à ce
            hackathon.
          </p>
          <button onClick={goToTheLoginPage} className="btn btn-red">
            Se Connecter
          </button>
        </div>
      )}
      {logged && (
        <div className="participants">
          <SearchParticipant />
          <div className="listParticipants">
            
            {
              data?.map((item)=>{
                return(
                  <div className="item">
                  <div className="profile">
                    <div className="img">
                      <img
                        src={item.user.image ? item.user.image : userImage}
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <div className="name">
                        <p>{item.user.firstName}</p>
                        <button className="follow">+</button>
                      </div>
                      <div className="status">{item.team? "Has a team": "Looking for teammates"}</div>
                    </div>
                  </div>
                  <div className="others">
                    <div className="skills">
                      {
                        item.user.skills?.map((skill)=>{
                          return <p>{skill}</p>
                        })
                      }
                    </div>
                    <div className="intersts">
                      {
                        item.user.interests?.map((interest)=>{
                          return <p>{interest}</p>
                        })
                      }
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      )}
    </Participants>
  );
};

const Participants = styled.div`
  .message {
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em auto;
    padding: 2em 2em;
    text-align: center;
  }
  .participants {
    margin: 2em;
    .listParticipants {
      margin: 2em 1em;
      .item {
        border: 1px solid #b7c3c7;
        padding: 20px 15px;
        margin-bottom: 15px;
        .profile {
          display: flex;
          gap: 10px;
          img {
            width: 60px;
            height: auto;
            border-radius: 50%;
          }
          .info {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .name {
              display: flex;
              align-items: center;
              gap: 10px;
              p {
                padding: 0;
                font-size: 22px;
                margin: 0;
              }
              button {
                background-color: #c58011;
                color: white;
                font-weight: 600;
                padding: 0px 5px;
                font-size: 15px;
              }
            }
            .status {
              color: #999794;
              border: 2px solid #e6e6e6;
              border-radius: 30px;
              padding: 5px 8px;
            }
          }
        }
        .others {
          margin: 1em 0;
          display: flex;
          justify-content: space-between;
          .intersts {
            display: flex;
            gap: 10px;
          }
          p {
            color: #233136;
            background-color: #c5801157;
            padding: 5px 10px;
            border-radius: 30px;
            font-size: 15px;
          }
        }
      }
    }
  }
`;

export default Participants_comp;
