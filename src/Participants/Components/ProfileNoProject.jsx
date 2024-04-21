import styled from "styled-components";

const ProfileNoProject = () => {
  return (
    <EmptyPortfolio>
      <div className="project_empty">
        Le portefeuille de l'UTILISATEUR est vide.
      </div>
    </EmptyPortfolio>
  );
};
const EmptyPortfolio = styled.div`
  .project_empty {
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
`;
export default ProfileNoProject;
