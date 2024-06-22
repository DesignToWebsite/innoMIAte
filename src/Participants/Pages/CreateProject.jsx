import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import JoinCompetitionBtn from "../JoinCompetitionBtn";
import CreateProjectBtn from "../Components/Buttons/CreateProjectBtn";
import axios from "axios";

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
          <>
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
          </>
        }
        {  joinedCompetition && !(hasATeam) &&
          <>
            <p>
              Créer un projet ou rejoindre un project
            </p>
            <button onClick={handleCreateProject} className="btn btn-red">Create a project</button>
          </>
        }
        {  joinedCompetition && hasATeam &&
          <>
            <p>
              Créer un projet ou rejoindre un project
            </p>
            <button onClick={handleCreateProject} className="btn btn-red">Create a project</button>
          </>
        }
        
      </div>
    </Create>
  );
};
const Create = styled.div`
  padding: 0 2em;
  .create {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #d9d9d9;
    width: fit-content;
    margin: auto;
    padding: 2em 1em;
    border-radius: 5px;
    text-align: center;
  }
`;

const BtnCreateProject = ({hasATeam}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const addProject = async (e) => {
    e.preventDefault();
    navigate(`/competition/${id}/createProject`);
  };
  const addMembers = async (e) => {
    e.preventDefault();
    navigate(`/competition/${id}/participants`);
  };
  const deteteProject = async(e)=>{
    e.preventDefault()
    try{
      const url = await axios.delete(`http://localhost:5299/api/groups/delete/${hasATeam}`)

      if(url.response){
        console.log("group deleted")
      }
    }catch(error){
      console.error(error)
    }
    window.reload()
    navigate(`/competition/${id}/myProject`)
  }

  return (
    <BtnCreate>
      {hasATeam? 
        <button onClick={deteteProject} className="btn btn-red">
        Delete project
      </button> : 
       <button onClick={addProject} className="btn btn-red">
       Create project
     </button>
      }
      <button onClick={addMembers} className="btn btn-green">
        Trouver des coéquipiers
      </button>
    </BtnCreate>
  );
};
const BtnCreate = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 15px; */
  button {
    margin-bottom: 15px;
  }
`;
export { BtnCreateProject, CreateProject };
