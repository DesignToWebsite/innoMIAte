import React, { useEffect, useState } from "react";
import axios from "axios";
import userImage from "../../../../assets/Profile/user.png";
import styled from "styled-components";
import {
  ORANGE_COLOR,
  ORANGE_COLOR_DARK,
  RED_COLOR,
} from "../../../../style/Colors";
import {
  PADDING_BIG_SCREEN,
  PADDING_SMALL_SCREEN,
} from "../../../../style/Padding";

const ManageTeam = ({ data, isLeader, connectedUser, teamName }) => {
  const [team, setTeam] = useState(null);
  const [emailToSearch, setEmailToSearch] = useState("");
  const [error, setError] = useState(null);
  const [groupInfo, setGroupInfo] = useState([]);
  const teamId = teamName?.groupId;
  const getTeamInfo = async () => {
    const url = `http://localhost:5299/api/groups/${teamId}/participants`;
    try {
      const response = await axios.get(url);
      if (response.data) {
        setGroupInfo(response.data.$values);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (teamName) getTeamInfo();
  }, [teamId]);
  const counter = teamName?.participants.$values.length;
  // console.log(counter);
  console.log("hsdkjsd", groupInfo);
  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5299/api/User/details-by-email?email=${encodeURIComponent(
      emailToSearch
    )}`;

    try {
      const response = await axios.get(url);
      if (response.data) {
        if (!team) {
          setTeam(response.data);
        }
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };
  const handleCreateProject = async(e)=>{
    e.preventDefault();
    navigate(`/competition/${id}/createProject`)
}
  const emailSearch = (e) => {
    setEmailToSearch(e.target.value);
  };

  const removeTeamMember = (emailToRemove) => {
    // setTeam((prevTeams) =>
    //   prevTeams.filter((team) => team.email !== emailToRemove)
    // );
    setTeam(null);
  };
  const addMemberToDB = async (e) => {
    e.preventDefault();

    const body = {
      participantId: team.participantId,
      teamId: teamId,
    };
    const url = `http://localhost:5299/api/groups/${body.teamId}/participants/${body.participantId}`;

    try {
      const response = await axios.put(url, body);
      if (response.data) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addMembers = async (e) => {
    e.preventDefault();
    navigate(`/competition/${id}/participants`);
  };
  return (
    <>
      {isLeader ? (
        <Team>
          <h2>Gérer l'équipe</h2>
          <p>
            Ajouter, supprimer et rechercher des coéquipiers, minimum 3
            personnes maximum 5 personnes
          </p>
          <div className="line"></div>
          <div className="addMember">
            <div className="currentMembers">
              <h3>Coéquipiers actuels</h3>
              <div className="teams">
                {groupInfo?.map((item, key) => {
                  return (
                    <div key={key} className="item">
                      <div className="img">
                        <img
                          src={item?.image ? item.image : userImage}
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <a href="#">
                          {item.lastName} {item.firstName}
                        </a>
                        <p>{item.username}</p>
                      </div>
                      {/* <div onClick={(item.userId) => handleDelete()} className="delete">
                        X
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="addMembers">
              {counter < 5 ? (
                <>
                  <h3>Inviter des coéquipiers</h3>
                  <div className="inviteInput">
                    <input
                      onChange={emailSearch}
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Add team members via email – someone@example.com"
                    />
                    <button onClick={handleSearch} className="btn btn-green">
                      Trouvez vos coéquipiers
                    </button>
                  </div>
                </>
              ) : (
                <h3>Équipe complète</h3>
              )}
            </div>
          </div>

          <div className="newMembers">
            <div className="teams">
              {team && (
                <div className="item">
                  <div className="img">
                    <img src={team.image ? team.image : userImage} alt="" />
                  </div>
                  <div className="info">
                    <a href="#">
                      {team.lastName} {team.firstName}
                    </a>
                    <p>{team.userName}</p>
                  </div>
                  <button
                    className="btn btn-red"
                    onClick={() => removeTeamMember(team.email)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="btns">
            <button onClick={addMemberToDB} className="btn btn-green">
              enregistrer
            </button>
            {emailToSearch && (
              <p className="info">
                Cliquez sur le bouton Enregistrer pour ajouter le nouveau membre
                à votre groupe
              </p>
            )}
          </div>
          {error && <p className="error">{error}</p>}
        </Team>
      ) : teamName ? (
        <Team>
          <div className="currentMembers">
            <h3>Coéquipiers actuels</h3>
            <div className="teams">
              {groupInfo?.map((item, key) => {
                return (
                  <div key={key} className="item">
                    <div className="img">
                      <img src={item?.image ? item.image : userImage} alt="" />
                    </div>
                    <div className="info">
                      <a href="#">
                        {item.lastName} {item.firstName}
                      </a>
                      <p>{item.username}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Team>
      ) : (
        <Team>
          <h2>Vous devez créer ou rejoindre une équipe</h2>
          <div className="btns">
          <button onClick={handleCreateProject} className="btn btn-red">Créer un projet</button>
          <button onClick={addMembers} className="btn btn-green">
        Trouver des coéquipiers
      </button>
          </div>
          
        </Team>
      )}
    </>
  );
};

const Team = styled.div`
  padding: ${PADDING_BIG_SCREEN};
  @media (max-width: 425px) {
    padding: ${PADDING_SMALL_SCREEN};
  }
  .btns{
    display: flex;
    gap: 20px;
    margin: 2em 0;
  }
  p {
    color: #233136;
  }
  .line {
    background: #dddddd;
    height: 2px;
    margin-bottom: 25px;
  }
  .inviteInput {
    display: flex;
    margin: 15px 0;
    width: 100%;
    @media (max-width: 700px) {
      flex-direction: column;
      gap: 10px;
      flex-wrap: wrap;
    }
    input {
      border: 1px solid #dddddd;
      padding: 5px 10px;
      min-width: 500px;

      /* min-width:400px ; */
      /* width: inherit; */
    }
  }

  .teams {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin: 25px 0 0 0;
    .item {
      position: relative;
      display: flex;
      gap: 10px;
      margin-bottom: 10px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      p {
        color: #b7b6b6;
        font-size: 15px;
      }
    }
  }
  .delete {
    background-color: ${RED_COLOR};
    width: fit-content;
    height: fit-content;
    padding: 2px 5px;
    font-weight: bold;
    border-radius: 50%;
    color: white;
    display: flex;
    cursor: pointer;
    position: absolute;
    right: 0;
  }
  .newMembers {
    margin: 1em 0;
    .btn {
      display: flex;
      height: fit-content;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
    }
  }
  .info {
    font-size: 14px;
    margin: 0;
    color: ${ORANGE_COLOR};
    font-weight: bold;
  }
`;

export default ManageTeam;
