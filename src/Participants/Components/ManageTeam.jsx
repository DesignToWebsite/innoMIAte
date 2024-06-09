import React, { useEffect, useState } from "react";
import axios from "axios";
import userImage from "../../assets/Profile/user.png";
import styled from "styled-components";
import { RED_COLOR } from "../../style/Colors";

const ManageTeam = ({ data, isLeader, connectedUser, teamName }) => {
  const [team, setTeam] = useState(null);
  const [emailToSearch, setEmailToSearch] = useState("");
  const [error, setError] = useState(null);
  const [groupInfo, setGroupInfo] = useState([]);
  // console.log("team", teamName);
  const teamId = teamName?.groupId;
  // console.log(teamId)
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
    if(teamName)
      getTeamInfo();
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

  const emailSearch = (e) => {
    setEmailToSearch(e.target.value);
  };

  const removeTeamMember = (emailToRemove) => {
    setTeam((prevTeams) =>
      prevTeams.filter((team) => team.email !== emailToRemove)
    );
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
  const handleDelete = ()=> {

  }
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

            <div className="currentMembers">
              <h3>Coéquipiers actuels</h3>
              <div className="teams">
                {groupInfo?.map((item, key) => {
                  return (
                    <div key={key} className="item">
                      <div className="img">
                        <img
                          src={
                            item?.image
                              ? item.image
                              : userImage
                          }
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
          </div>
          {emailToSearch && (
            <p className="info">
              Enregistrer le nouveau membre Pour que vous puissiez chercher
              d'autre personne
            </p>
          )}

          <div className="newMembers">
            <div className="teams">
              {team && (
                <div className="item" >
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
          </div>
          {error && <p className="error">{error}</p>}
        </Team>
      ) : (
        <h2 style={{ margin: "2em" }}>
          Seul le leader peut inviter des membres.
        </h2>
      )}
    </>
  );
};

const Team = styled.div`
  margin: 1em 2em;
  p {
    color: #233136;
  }
  .line {
    background: #dddddd;
    height: 2px;
    margin-bottom: 25px;
  }
  .inviteInput {
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 15px 0;
    input {
      border: 1px solid #dddddd;
      padding: 5px 10px;
    }
  }
  .addMember {
    display: grid !important;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }
  .teams {

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
  .delete{
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
`;

export default ManageTeam;
