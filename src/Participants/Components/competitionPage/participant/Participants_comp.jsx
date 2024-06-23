import styled from "styled-components";
import usersIcon from "../../../../assets/dashboard_competition/Users.png";
import Search from "../../general/Search";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import userImage from "../../../../assets/Profile/user.png";
import SearchParticipant from "./SearchParticipant";
import {
  PADDING_BIG_SCREEN,
  PADDING_SMALL_SCREEN,
} from "../../../../style/Padding";

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
        setData(response.data.participants.$values);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCompetitionParticipant();
  }, []);
  console.log("participant", data);
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
            {data?.map((item) => {
              return (
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
                        <p>{item.user.userName}</p>
                      </div>
                      <div className="status">
                        {item.groupId && item.isLeader && "chef d'équipe"}
                        {item.groupId && !item.isLeader && "membre d'équipe"}
                        {!item.groupId && "solo"}
                      </div>
                    </div>
                  </div>
                  <div className="others">
                    <div className="items skills">
                      {item.user.skills?.$values.map((skill) => {
                        return <p>{skill}</p>;
                      })}
                    </div>
                    {/* <div className="items intersts">
                      {item.user.interests?.$values.map((interest) => {
                        return <p>{interest}</p>;
                      })}
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Participants>
  );
};

const Participants = styled.div`
  padding: ${PADDING_BIG_SCREEN};
  @media (max-width: 425px) {
    padding: ${PADDING_SMALL_SCREEN};
  }
  
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
    /* margin: 2em; */
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
            flex-wrap: wrap;
            gap: 10px;
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
          margin: 15px 0 0 0;
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
  .items{
    display: flex;
    gap: 10px;
  }
`;

export default Participants_comp;
