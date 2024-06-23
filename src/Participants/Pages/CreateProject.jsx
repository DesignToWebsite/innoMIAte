import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import JoinCompetitionBtn from "../JoinCompetitionBtn";
import CreateProjectBtn from "../Components/Buttons/CreateProjectBtn";
import axios from "axios";
import ConfirmModal from "../Components/general/ConfimModal";
import { useState } from "react";

const CreateProject = ({
  data,
  isLogged,
  joinedCompetition,
  setJoinedCompetition,
  setHasATeam,
  hasATeam
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(hasATeam)

  const handleCreateProject = async(e)=>{
      e.preventDefault();
      navigate(`/competition/${id}/createProject`)
  }
  return (
    <Create>
      <h2>Mon projet de hackathon</h2>
      <div className="create">
        {  !joinedCompetition &&
          <div  className="createProject">
            <p>
              Démarrez un projet pour commencer votre soumission et inviter des
              coéquipiers
            </p>
            <JoinCompetitionBtn
              isLogged={isLogged}
              joinedCompetition={joinedCompetition}
              setJoinedCompetition={setJoinedCompetition}
              data={data}
            />
          </div>
        }
        {  joinedCompetition && !(hasATeam) &&
          <div className="createProject">
            <p>
              Créer un projet ou rejoindre un project
            </p>
            <button onClick={handleCreateProject} className="btn btn-red">Create a project</button>
          </div>
        }
        {  joinedCompetition && hasATeam &&
          <div  className="createProject">
            <p>
              Créer un projet ou rejoindre un project
            </p>
            <button onClick={handleCreateProject} className="btn btn-red">Create a project</button>
          </div>
        }
        
      </div>
    </Create>
  );
};
const Create = styled.div`
  /* padding: 0 2em; */
  .create {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #d9d9d9;
    /* width: fit-content; */
    max-width: 500px;
    margin: 2em auto;
    padding: 2em 1em;
    border-radius: 5px;
    text-align: center;
  }
`;

const BtnCreateProject = ({ hasATeam }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const addProject = async (e) => {
    e.preventDefault();
    navigate(`/competition/${id}/createProject`);
  };

  const addMembers = async (e) => {
    e.preventDefault();
    navigate(`/competition/${id}/participants`);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5299/api/groups/delete/${hasATeam}`);
      if (response.status === 200) {
        console.log("Group deleted");
        setShowModal(false);
        navigate(`/competition/${id}/myProject?projectDeleted`);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProject = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <BtnCreate>
        {hasATeam ? (
          <button onClick={deleteProject} className="btn btn-red">
            Supprimer le projet
          </button>
        ) : (
          <button onClick={addProject} className="btn btn-red">
            Créer un projet
          </button>
        )}
        <button onClick={addMembers} className="btn btn-green">
          Trouver des coéquipiers
        </button>
      </BtnCreate>
      <ConfirmModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

const BtnCreate = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 15px;
  }
`;

export { BtnCreateProject, CreateProject };
