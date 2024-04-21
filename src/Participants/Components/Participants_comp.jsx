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
      {
        logged && (
            <div className="participants">
                <Search />
                <div className="listParticipants">
                    <div className="item">
                        <div className="profile">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <div className="info">
                                <div className="name">
                                    <p>Name</p>
                                    <button className="follow">+</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
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
`;

export default Participants_comp;
