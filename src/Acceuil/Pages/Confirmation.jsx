import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import axios from "axios";
import SearchReception from "../components/SearchReception";
import ModelCreateParticipant from "../components/ModelCreateParticipant";
import ModelEditParticipant from "../components/ModelEditParticipant";
import ModelAddToAGroup from "../components/ModeltAddToAGroup";
import { ORANGE_COLOR } from "../../style/Colors";
import LeaveGroup from "../../Participants/Components/Buttons/LeaveGroup";

const Confirmation = () => {
  const [isConfirmed, setIsConfirmed] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const connectedUser = JSON.parse(localStorage.getItem("user"));

  const handleConfirmation = async (e, user) => {
    e.preventDefault();
    // console.log(user);
    const url = `http://localhost:5299/api/CompetitionParticipant/confirm?userId=${user.userId}&competitionId=${user.competitionId}`;
    try {
      const response = await axios.post(url);
      if (response?.data) {
        console.log("User comfimed ");
        navigate(`/confirmation/1?confirmed`)
        window.location.reload();

      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
  };
  const handleAdd = async (e) => {
    e.preventDefault();
  };
  const handleDeleteGroup = async (e, idGroup, idParticipant) => {
    e.preventDefault();
    // const url = "55"
    try {
      const response = await axios.delete(
        `http://localhost:5299/api/groups/delete/${idGroup}`
      );
      if (response.data) {
        navigate("/confirmation/1?groupeDeleted")
        window.location.reload();
        // alert("Groupe a été supprimer");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const url = `http://localhost:5299/api/CompetitionParticipant/${id}`;
      try {
        const response = await axios.get(url);
        if (response?.data) {
          setUsers(response.data.$values);
          setFilteredUsers(response.data.$values); // Initialize filtered users
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUsers();
  }, [id]);
  // console.log(users)
  return (
    <>
      {connectedUser.isAcceuil && (
        <ConfirmationStyle className="container">
          <div className="title">
            <h2>Réception</h2>
            <button
              type="button"
              className="btn btn-green"
              data-toggle="modal"
              data-target="#addParticipantModal"
            >
              Ajouter un participant
            </button>
          </div>
          <SearchReception users={users} setFilteredUsers={setFilteredUsers} />
          <div style={{ overflowX: "auto" }}></div>
          <table>
            <thead>
              <tr>
                <th>Nom complet</th>
                <th>Email</th>
                <th>Team</th>
                <th>Leader</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers ? (
                filteredUsers.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td data-label="Nom complet">
                        {user.firstName} {user.lastName}
                      </td>
                      <td data-label="Email">{user.email}</td>
                      <td data-label="Team">{user.groupName}</td>
                      <td data-label="Leader">{user.isLeader ? 1 : 0}</td>
                      <td data-label="Action">
                        {!user.isConfirmed && (
                          <button
                            onClick={(e) => handleConfirmation(e, user)}
                            className="btn btn-orange"
                          >
                            Confirmation
                          </button>
                        )}
                        {user.isConfirmed && (
                          <div className="actions">
                            {!user.isLeader && !user.groupName && (
                              <button
                                type="button"
                                className="btn btn-green"
                                data-toggle="modal"
                                data-target={`#editParticipantModel${index}`}
                              >
                                Modifier
                              </button>
                            )}
                            {!user.groupName && (
                              <button
                                type="button"
                                className="btn btn-green btn-add"
                                data-toggle="modal"
                                data-target={`#addParticipantToAGroup${index}`}
                              >
                                Ajouter
                              </button>
                            )}
                            {user.groupName && user.isLeader && (
                              <button
                                type="button"
                                className="btn btn-red btn-delete-group"
                                onClick={(e) =>
                                  handleDeleteGroup(
                                    e,
                                    user.groupId,
                                    user.participantId
                                  )
                                }
                              >
                                Supprimer le groupe
                              </button>
                            )}

                            {user.groupName && !user.isLeader && (
                              <LeaveGroup participantId={user.participantId} />
                            )}

                            <ModelEditParticipant user={user} index={index} />
                            <ModelAddToAGroup user={user} index={index} />
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p>No user exists</p>
              )}
            </tbody>
          </table>
          <ModelCreateParticipant />
        </ConfirmationStyle>
      )}
    </>
  );
};

const ConfirmationStyle = styled.div`
  min-height: 80vh;
  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  table {
    width: 100%;
    margin: 2em 0;
    border-collapse: collapse;
    overflow-x: auto;
    /* display: block; */
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  tr:hover {
    background-color: #ddd;
  }
  .title {
    caption-side: top;
    font-size: 1.5em;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    table {
      display: block;
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;
      border-collapse: collapse;
    }

    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
      display: flex;
    }
    tr {
      /* margin: 0rem 0 1rem 0; */
      padding: 20px 0;
      border-bottom: 2px solid #ddd;
    }
    tr:nth-child(even) {
      background-color: transparent;
    }
    td {
      border: none;
      position: relative;
      padding-left: 50%;
      text-align: right;
    }
    td:before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      width: calc(50% - 20px);
      padding-right: 10px;
      text-align: left;
      white-space: normal;
      font-weight: bold;
    }
  }
  .btn-orange {
    background-color: ${ORANGE_COLOR};
  }
  .btn-delete-group,
  .btn-add {
    opacity: 0.8;
  }
`;

export default Confirmation;
