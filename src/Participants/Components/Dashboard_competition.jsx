import styled from "styled-components";
import Rules from "../../assets/dashboard_competition/Rules.png"
import Chat from "../../assets/dashboard_competition/Discussion.png"
import Participants from "../../assets/dashboard_competition/Participants.png"
import Discussion from "../../assets/dashboard_competition/Discussion.png"
import Overview from "../../assets/dashboard_competition/Overview.png"
import Picture from "../../assets/dashboard_competition/Picture.png"
import Ressources from "../../assets/dashboard_competition/Ressources.png"
import Task from "../../assets/dashboard_competition/Task.png"
import { GREEN_COLOR } from "../../style/Colors";
import { Link } from "react-router-dom";

const Dashboard_competition = () => {
  return (
    <Dashboard>
    <nav class="nav flex-column">
      <Link to="/competition/overview" class="nav-link active" aria-current="page" >
         <img src={Overview} alt="" /> <span>Aperçu</span>
      </Link>
      <Link to="/competition/myProject" class="nav-link" >
        <img src={Task} alt="" />
        <span>Mon projet</span>
      </Link>
      <a class="nav-link" href="#">
        <img src={Participants} alt="" />
        <span>Participants (220)</span>
      </a>
      <a class="nav-link" href="#">
        <img src={Ressources} alt="" />
        <span>Ressources</span> 
      </a>
      <a class="nav-link" href="#">
        <img src={Rules} alt="" />
        <span>Règles</span> 
      </a>
      <a class="nav-link" href="#">
        <img src={Picture} alt="" />
        <span>Galerie de projets</span> 
      </a>
      <a class="nav-link" href="#">
        <img src={Discussion} alt="" />
        <span>Discussions</span> 
      </a>
    </nav>
    </Dashboard>
  );
};

const Dashboard = styled.div`
    background: linear-gradient(to right, ${GREEN_COLOR}, ${GREEN_COLOR}  );
    /* width: 200px; */
    nav{
        a{
            display: flex;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
            
            img{
                margin-right: 5px;
                width: 30px;
                height: 30px;
            }
            span{
                color: white;
                @media screen and (max-width: 768px){
                  display: none;
                }
            }
        }
    }
`
export default Dashboard_competition;
