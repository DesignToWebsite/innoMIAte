import styled from "styled-components";
import ProjectCard_competition from "./ProjectCard_competition";

const ProfileProjectsExist = ({ user }) => {
  return (
    <Projects>
      <div className="project">
        <h3>Projects</h3>
        <div className="projectsList">
          {user.competition.map((item) => {
            return (
              <ProjectCard_competition
                data={item.project}
                key={item.competitionId}
              />
            );
          })}
          {user.presonalProjects.map((item) => {
            return (
              <ProjectCard_competition
                data={item.project}
                key={item.competitionId}
              />
            );
          })}
        </div>
      </div>
    </Projects>
  );
};
const Projects = styled.div`
  .project {
    margin: 1em 0;

    .projectsList {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
  }
`;
export default ProfileProjectsExist;
