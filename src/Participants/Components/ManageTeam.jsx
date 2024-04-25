import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ManageTeam = () => {
  return (
    <Team>
      <h2>Manage team</h2>
      <p>
        Add, remove, and look for teammates. If you're working alone, skip this
        step.
      </p>
      <div className="line"></div>
      <div className="content">
        <div className="addMembers">
          <h3>Invite Teammates</h3>
          <p>
            Either share the link below privately with your teammates or send an
            invite link via email
          </p>
          <div className="inviteInput">
            <input
              type="email"
              placeholder="Add team members via email – someone@example.com"
            />
            <button className="btn btn-green">Send invite</button>
          </div>
        </div>
        <div className="currentMembers">
          <h3>Current teammates</h3>
          <p>
            Only the project creator, Zineb Essoussi, can remove team members.
          </p>
          <div className="teams">
            <div className="item">
              <div className="img">
                <img src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg" alt="" />
              </div>
              <div className="info">
                <Link to="/profile/zineb-zineb-zouzou">Zineb Essoussi</Link>
                <p>@zineb-zineb-zouzou</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btns">
        <button className="btn btn-green">Save & continue</button>
      </div>
    </Team>
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
  .content {
    display: grid;
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
