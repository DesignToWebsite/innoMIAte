import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import userImage from "../../assets/Profile/user.png"
const ManageTeam = ({data, isLeader, connectedUser}) => {
  console.log(connectedUser)
  return (
    <> {isLeader ?
    <Team>
      <h2>Manage team</h2>
      <p>
        Add, remove, and look for teammates. min 3 person max 5 person
      </p>
      <div className="line"></div>
      <div className="addMember">
        <div className="addMembers">
          <h3>Invite Teammates</h3>
          <p>
            Add your teammates by adding there emails and click save to add them to the project
          </p>
          <div className="inviteInput">
            <input
              type="email"
              placeholder="Add team members via email – someone@example.com"
            />
            <button className="btn btn-green">Add member</button>
          </div>
        </div>
        <div className="currentMembers">
          <h3>Current teammates</h3>
          <p>
            Only the project creator, {connectedUser.lastName} {connectedUser.firstName}, can remove or add team members.
          </p>
          <div className="teams">
            <div className="item">
              <div className="img">
                <img src={connectedUser.image ? connectedUser.image : userImage} alt="" />
              </div>
              <div className="info">
                <Link to={`/profile/${connectedUser.userName}`} >Zineb Essoussi</Link>
                <p>{connectedUser.userName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btns">
        <button className="btn btn-green">Save </button>
      </div>
    </Team> : 
    <h2 style={{margin:"2em"}}>Only leader can invite members</h2>
    }
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
    input{
        border:  1px solid #dddddd;
        padding: 5px 10px;
    }
  }
  .addMember {
    display: grid !important;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }
  .teams{
    .item{
        display: flex;
        gap : 10px;
        margin-bottom: 10px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        p{
            color:#b7b6b6;
            font-size: 15px;
            
        }
    }
  }
`;

export default ManageTeam;
