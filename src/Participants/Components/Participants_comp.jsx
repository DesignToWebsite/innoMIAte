import styled from "styled-components";
import usersIcon from "../../assets/dashboard_competition/Users.png";
import Search from "./Search";

const Participants_comp = () => {
  const logged = localStorage.getItem("user");
  return (
    <Participants>
      {!logged && (
        <div className="message">
          <img src={usersIcon} alt="" />
          <p>
            Veuillez vous connecter pour parcourir les participants à ce
            hackathon.
          </p>
          <button className="btn btn-red">Se Connecter</button>
        </div>
      )}
      {logged && (
        <div className="participants">
          <Search />
          <div className="listParticipants">
            <div className="item">
              <div className="profile">
                <div className="img">
                  <img
                    src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                    alt=""
                  />
                </div>
                <div className="info">
                  <div className="name">
                    
                      <p>Zineb Essoussi</p>
                      <button className="follow">+</button>
                  </div>
                  <div className="status">Looking for teammates</div>
                </div>
              </div>
              <div className="others">
                <div className="skills">
                  <p>Front end</p>
                </div>
                <div className="intersts">
                  <p>Front end</p>
                  <p>Backend</p>
                  <p>AI</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="profile">
                <div className="img">
                  <img
                    src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                    alt=""
                  />
                </div>
                <div className="info">
                  <div className="name">
                    
                      <p>Zineb Essoussi</p>
                      <button className="follow">+</button>
                  </div>
                  <div className="status">Looking for teammates</div>
                </div>
              </div>
              <div className="others">
                <div className="skills">
                  <p>Front end</p>
                </div>
                <div className="intersts">
                  <p>Front end</p>
                  <p>Backend</p>
                  <p>AI</p>
                </div>
              </div>
            </div>
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
        border: 1px solid #B7C3C7;
        padding: 20px 15px;
        margin-bottom: 15px;
        .profile {
          display: flex;
          gap: 10px;
          img {
            width: 60px;
            height: 60px;
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
              gap : 10px;
              p{
                padding: 0;
                font-size: 22px;
                margin: 0;
              }
              button{
                background-color: #C58011;
                color: white;
                font-weight: 600;
                padding: 0px 5px;
                font-size: 15px;
              }
            }
            .status{
              color: #999794;
              border: 2px solid #E6E6E6;
              border-radius: 30px;
              padding: 5px 8px;
            }
          }
        }
        .others{
          margin: 1em 0;
          display: flex;
          justify-content: space-between;
          .intersts{
            display: flex;
            gap: 10px;
          }
          p{
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
