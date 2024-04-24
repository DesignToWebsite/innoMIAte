import React, { useState } from "react";
import styled from "styled-components";
import location from "../../../assets/Profile/location.png";
import github from "../../../assets/Profile/github.png";
import edit from "../../../assets/Profile/edit.png";
import website from "../../../assets/Profile/website.png";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";
import { GREEN_COLOR, ORANGE_COLOR, RED_COLOR } from "../../../style/Colors";
import ProjectCard_competition from "../../Components/ProjectCard_competition";
import ProfileNoProject from "../../Components/ProfileNoProject";
import ProfileProjectsExist from "../../Components/ProfileProjectsExist";
import NewProjectAlert from "../../Components/NewProjectAlert";
import HackathonCard from "../../Components/HackathonCard";
// import Profile_noProject from "../../Components/profile_noProject";


const Profile = () => {
  const user = data.user;
  const competitions = data.competition;
  const [activePage, setActivePage] = useState("Projects")
  const projectsCounter =
    user.competition.length + user.presonalProjects;
    console.log(projectsCounter)



    const [showAlert, setShowAlert] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCancelAlert = () => {
    setShowAlert(false);
    setSelectedHackathon(null);
  };

  const handleYesClick = () => {
    if (selectedHackathon) {
      // Logic to submit project to selected hackathon
      alert(`Project submitted to ${selectedHackathon.title}`);
      setShowAlert(false);
      setSelectedHackathon(null);
    } else {
      alert("Please select a hackathon.");
    }
  };

  const handleNoClick = () => {
    // Add project only to the user's profile
    setShowAlert(false); // Close the alert
    // Add logic here to add the project to the user's profile
  };

  const handleHackathonSelection = (competition) => {
    setSelectedHackathon(competition);
  };
  return (
    <ProfileStyle>
      <UserInfo>
        <div className="bg"></div>
        <div className="infoUser">
          <div className="container">
            <div className="content">
              <div className="image">
                <img src={user.img} alt="" />
                <div className="btns">
                  <div className="btn btn-red">Modifier les paramètres</div>
                  <div className="btn btn-green" onClick={handleShowAlert}>Ajouter un nouveau projet</div>
                </div>
              </div>
              <div className="info">
                <h3 className="useName">
                  {user.name} <span> ({user.userName})</span>
                </h3>
                <p className="bio">{user.bio}</p>
                <div className="generalInfo">
                  <div className="item">
                    <img src={location} alt="" />
                    {/* <Link className="d-flex align-items-center " to=""> */}

                    {user.location}
                    {/* <img className="edit ms-1" src={edit} alt="" /> */}
                    {/* </Link> */}
                  </div>
                  <div className="item">
                    <img src={website} alt="" />
                    <a href={user.website}>Website</a>
                  </div>
                  <div className="item">
                    <img src={github} alt="" />
                    <a href={user.github}>GitHub</a>
                  </div>
                </div>
                <div className="skills">
                  <h4>Compétences</h4>
                  <div className="list">
                    {user.skills.map((item, key) => {
                      return (
                        <div key={key} className="item">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="interests">
                  <h4>Intérêts</h4>
                  <div className="list">
                    {user.interests.map((item, key) => {
                      return (
                        <div key={key} className="item">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserInfo>
      
      {showAlert && (
        <NewProjectAlert
          onCancel={handleCancelAlert}
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          competitions={competitions}
          onSelectHackathon={handleHackathonSelection}
          selectedHackathonId={selectedHackathon ? selectedHackathon.id : null}
        />
      )}
      <UserDashboard>
        <div className="UserDashboard">
          <div className="container">
            <ul className="nav_profile">
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage("Projects");
                  }}
                  className={activePage == "Projects" ? "active" : ""}
                  to="/profile/projects"
                >
                  <p className="number">{projectsCounter}</p>
                  <p>Projets</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage("Hackathon");
                  }}
                  className={activePage == "Hackathon" ? "active" : ""}
                  to="/profile/hackathon"
                >
                  <p className="number">{user.competition.length}</p>
                  <p>Hackathon</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage("Followers");
                  }}
                  className={activePage == "Followers" ? "active" : ""}
                  to="/profile/folowers"
                >
                  <p className="number">{user.followers.length}</p>
                  <p>Followers</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault;
                    setActivePage("Following");
                  }}
                  className={activePage == "Following" ? "active" : ""}
                  to="/profile/hackathon"
                >
                  <p className="number">{user.following.length}</p>
                  <p>Following</p>
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage("Likes");
                  }}
                  className={activePage == "Likes" ? "active" : ""}
                  to="/profile/hackathon"
                >
                  <p className="number">{user.likes.length}</p>
                  <p>j'aime</p>
                </Link>
              </li>
            </ul>
            {/* no project exist */}
            {activePage == "Projects" && projectsCounter == 0 ? <ProfileNoProject /> : ""
            
            }
            {/* project exist */}
            {
              activePage=="Projects" && projectsCounter >0 ? (
                <ProfileProjectsExist user={user}/>
              ) : (
                ""
              )
            }
            {
              activePage === "Hackathon" && user.competition.length > 0 ? (
                <HackathonSection>
                  <HackathonList>
                    {user.competition.map((competition, index) => (
                      <HackathonCard
                      key={competition.id}
                      competition={competition}
                      index={index}
                    />
                    ))}
                  </HackathonList>
                </HackathonSection>
              ) : (
                ""
              )
            }
          </div>
        </div>
      </UserDashboard>
    </ProfileStyle>
  );
};



const UserDashboard = styled.div`
  .UserDashboard {
    background: #f5f7f7;
    padding: 1em 0;
    ul.nav_profile {
      display: flex;
      padding: 0;
      a {
        margin-right: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          margin: 0;
          text-transform: capitalize;
          &.number {
            font-weight: bold;
          }
          &:nth-of-type(2) {
            color: #9caeb2;
          }
        }
        &.active {
          border-bottom: 3px solid ${ORANGE_COLOR};
          color: #192325;
          p {
            color: #192325;
          }
        }
      }
    }
  }
`;
const ProfileStyle = styled.div`

  
`;

const UserInfo = styled.div`
  /* background: darkblue; */
  padding-bottom: 0;
  height: fit-content;
  position: relative;
  .bg {
    position: absolute;
    /* top: 50px; */
    z-index: -1;
    height: 200px;
    width: 100vw;
    background: linear-gradient(to right, ${GREEN_COLOR}, ${RED_COLOR});
  }
  .infoUser {
    padding-top: 110px;
    z-index: 100;
    .content {
      display: flex;
      /* grid-template-columns: 1fr 3fr; */
    }
    .image {
      display: flex;
      flex-direction: column;
      align-items: center;
      .btns {
        display: flex;
        flex-direction: column;
        .btn {
          padding: 5px;
          margin-bottom: 10px;
        }
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
    .info {
      padding: 2em;
      h3 {
        text-transform: capitalize;
        display: flex;
        align-items: center;
        padding-bottom: 1em;
        color: white;
        span {
          font-size: 0.7em;
          margin-left: 10px;
        }
      }
      .bio {
        font-style: italic;
      }
      .generalInfo {
        display: flex;
        .item {
          display: flex;
          align-items: center;
          margin-right: 10px;
          color: ${ORANGE_COLOR};
          img {
            width: 15px;
            margin-right: 5px;
          }
        }
      }
    }
    .list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .item {
        margin-bottom: 5px;

        background: rgba(197, 128, 17, 0.229);
        color: #c58011;
        margin-right: 5px;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        font-size: 15px;
      }
    }
    .skills {
      display: flex;
      /* grid-template-columns: 1fr 3fr; */
      gap: 15px;
      margin: 10px 0;
      /* align-items: center; */
      h4 {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
      }
    }
    .interests {
      display: flex;
      gap: 15px;
      margin: 10px 0;
      /* align-items: center; */
      h4 {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
      }
    }
  }
`;

const HackathonSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

const HackathonList = styled.div`
  margin-top: 30px;
`;

export default Profile;
