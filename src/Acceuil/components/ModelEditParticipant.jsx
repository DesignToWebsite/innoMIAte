import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const ModelEditParticipant = ({ user, index }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isLeader: user.isLeader,
    groupId: user.groupId,
    teamName: user.groupName,
  });
const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      isLeader: formData.isLeader,
      groupId: formData.groupId,
      teamName: formData.teamName,
    };
    // add the team leader and the team
    if (user.isLeader !== updatedUser.isLeader && updatedUser.isLeader == true) {
      if(updatedUser.teamName.length <0){
        console.error("teamName should not be null")
      }
      // Additional actions if isLeader changes
      const url = "http://localhost:5299/api/groups/create"
      const create = {
        "participantId": user.participantId,
        "groupName": updatedUser.teamName
      }
      try{
        const response = await axios.post(url, create);
        if(response.data){
          console.log("team created succefully")
          navigate('/confirmation/1?teamCreated')
          window.location.reload()

        }
      }
      catch(error){
        console.error(error)
      }
    }

    // Perform the save action with updatedUser
    console.log("Updated user data:", updatedUser);
  };

  return (
    <ModelEdit>
      <div
        className="modal fade"
        id={`editParticipantModel${index}`}
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
              <form onSubmit={handleSubmit}>
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
                  <label htmlFor="isLeader">Chef de projet</label>
                  <input
                    placeholder="isLeader"
                    type="checkbox"
                    name="isLeader"
                    id="isLeader"
                    className="check"
                    onChange={handleChange}
                    checked={formData.isLeader}
                  />
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

                <button type="submit" className="submit btn btn-green">
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

export default ModelEditParticipant;
