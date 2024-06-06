import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import no_image from "../../assets/no_image.png"


const ProjectCard_team = ({ hasATeam}) => {
  const { id } = useParams();
  console.log(hasATeam)
  return (
    <>
      {hasATeam && (
        <ProjectCard>
          <Link to={`/competition/${id}/steps/manageTeam`} className="project">
            <div className="img">
              <img src={hasATeam.projectImage ? hasATeam.projectImage : no_image} alt="" />
            </div>
            <div className="info">
              <div className="projectName">
                <h5>{hasATeam.projectName} </h5>
              </div>
              <div className="projectDescription">
                <p>{hasATeam.projectDescription}</p>{" "}
              </div>
              {/* <div className="team">
                <div className="img-team">
                  {hasATeam.participant?.map((img, index) => {
                    return (
                      <div
                        className="circle"
                        style={{ position: "absolute", left: index * 20 }}
                        key={index}
                      >
                        <img src={img} alt={`Image ${index + 1}`} />
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </Link>
        </ProjectCard>
      )}
    </>
  );
};

const ProjectCard = styled.div`
  margin: 2em;
  a.project {
    width: 250px;
    display: grid;
    border: 1px solid #b7c3c7;
    position: relative;
    color: black;
    .img img {
      /* height: 200px; */
      width: 100%;
    }
    .info {
      padding: 10px;
      h5 {
        font-weight: 600;
      }
    }
    .team {
      /* display: flex; */
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
