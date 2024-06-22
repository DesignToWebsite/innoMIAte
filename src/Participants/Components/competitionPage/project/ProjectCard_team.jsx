import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import no_image from "../../../../assets/no_image.png";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectCard_team = ({ hasATeam, isLeader }) => {
  const { id } = useParams();
  console.log("team", hasATeam);
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    const getTeamInfo = async () => {
      const url = `http://localhost:5299/api/groups/${hasATeam}`;
      try {
        const response = await axios(url);
        if (response) {
          console.log("team info", response.data);
          setTeamInfo(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTeamInfo();
  }, [hasATeam]);

  console.log("team info", teamInfo);

  return (
    <>
      {hasATeam && teamInfo && (
        <ProjectCard>
          {isLeader ? (
            <Link to={`/competition/${id}/steps/manageTeam`} className="project">
              <CardContent teamInfo={teamInfo} />
            </Link>
          ) : (
            <div className="project">
              <CardContent teamInfo={teamInfo} />
            </div>
          )}
        </ProjectCard>
      )}
    </>
  );
};

const CardContent = ({ teamInfo }) => (
  <>
    <div className="img">
      <img
        src={teamInfo.projectImage ? `http://localhost:5299/${teamInfo.projectImage}` : no_image}
        alt=""
      />
    </div>
    <div className="info">
      <div className="projectName">
        <h5>{teamInfo.projectName}</h5>
      </div>
      <div className="projectDescription">
        <p>{teamInfo.projectDescription}</p>
      </div>
    </div>
  </>
);

const ProjectCard = styled.div`
  margin: 2em;
  .project {
    width: 250px;
    display: grid;
    border: 1px solid #b7c3c7;
    position: relative;
    color: black;
    .img img {
      width: 100%;
    }
    .info {
      padding: 10px;
      h5 {
        font-weight: 600;
      }
    }
    .team {
      position: relative;
      padding-bottom: 2em;
      a {
        text-align: end;
        display: flex;
        align-items: end;
        justify-content: end;
        z-index: 100;
      }
      .img-team {
        max-width: 60%;
        overflow: hidden;
        .circle {
          width: 40px;
          img {
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export default ProjectCard_team;
