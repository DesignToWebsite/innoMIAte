import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ModelAddToAGroup = ({ user, index }) => {
  // console.log(user);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isLeader: user.isLeader,
    groupId: user.groupId,
    teamName: user.groupName,
  });
  const [getGroups, setGetGroups] = useState([]);
  const [group, setGroup] = useState(null);
  const [userId, setUserId] = useState(user.participantId);

  //Get the list of groupes
  const getGroupsFromApi = async () => {
    const url = "http://localhost:5299/api/groups";
    try {
      const response = await axios.get(url);
      if (response) {
        // console.log("groupes", response.data.$values);
        setGetGroups(response.data.$values);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGroupsFromApi();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value)
    setGroup(e.target.value);
  };
  
  const handleSubmit = async () => {
console.log(group,userId)
    const url = `http://localhost:5299/api/groups/${group}/participants/${userId}`;

    try {
      const response = await axios.put(url);
      if (response.data) {
        alert("utilisateur ajouté avec succès au groupe");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ModelEdit>
      <div
        className="modal fade"
        id={`addParticipantToAGroup${index}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editParticipantModelTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modifier les informations des utilisateurs
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="item">
                  <label htmlFor="firstName">Nom</label>
                  <input
                    placeholder="Nom"
                    type="text"
                    name="firstName"
                    id="firstName"
                    readOnly
                    value={formData.firstName}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="lastName">Prenom</label>
                  <input
                    placeholder="Prenom"
                    type="text"
                    name="lastName"
                    id="lastName"
                    readOnly
                    value={formData.lastName}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    readOnly
                    value={formData.email}
                    required
                  />
                </div>
                <div className="item">
                  <label htmlFor="isLeader">Nom du groupe</label>
                  <select onChange={handleChange} name="group" id="group">
                    {getGroups?.map((item, key) => {
                      return (
                        <option key={key} value={item.groupId}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {formData.isLeader && (
                  <div className="item">
                    <label htmlFor="teamName">Le nom du groupe</label>
                    <input
                      placeholder="teamName"
                      type="text"
                      name="teamName"
                      id="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="submit btn btn-green"
                >
                  Save changes
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-red"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModelEdit>
  );
};

const ModelEdit = styled.div`
  form {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 2em auto;
    .item {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      label {
        margin-right: 10px;
        padding: 5px;
      }
      input,
      select {
        padding: 5px 10px;
        border-radius: 5px;
        background: #eeeeee;
        position: relative;
        width: 200px;
      }
    }
    .submit {
      margin: 2em 0 0 0;
    }
  }
  .check {
    height: 20px;
  }
`;

export default ModelAddToAGroup;
