import styled from "styled-components";
import Rules from "../../assets/dashboard_competition/Rules.png"
import Chat from "../../assets/dashboard_competition/Discussion.png"
import Participants from "../../assets/dashboard_competition/Participants.png"
import Discussion from "../../assets/dashboard_competition/Discussion.png"
import Overview from "../../assets/dashboard_competition/Overview.png"
import Picture from "../../assets/dashboard_competition/Picture.png"



const Dashboard_competition = () => {
  return (
    <Dashboard>
    <nav class="nav flex-column">
      <a class="nav-link active" aria-current="page" href="#">
         <img src={Rules} alt="" /> Active
      </a>
      <a class="nav-link" href="#">
        Link
      </a>
      <a class="nav-link" href="#">
        Link
      </a>
      <a class="nav-link disabled" aria-disabled="true">
        Disabled
      </a>
    </nav>
    </Dashboard>
  );
};

const Dashboard = styled.div`
    background-color: black;
    img{
        fill: red;
    }
`
export default Dashboard_competition;
