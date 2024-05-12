import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import AddProjectBtn from "../AddProjectBtn";

const CreateProject = ({data, isLogged, joinedCompetition, setJoinedCompetition}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  
  return (
    <Create>
      <h2>Mon projet de hackathon</h2>
      <div className="create">
        <p>
          Démarrez un projet pour commencer votre soumission et inviter des
          coéquipiers
        </p>
        <AddProjectBtn
                    isLogged={isLogged} 
                    joinedCompetition={joinedCompetition} 
                    setJoinedCompetition={setJoinedCompetition}  
                    data={data} 
          />      </div>
    </Create>
  );
};
const Create = styled.div`
padding : 0 2em;
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

const BtnCreateProject = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const editProject = async(e)=>{
    e.preventDefault();
    navigate(`/competition/${id}/steps`)
  }
  const addMembers = async(e)=>{
    e.preventDefault()
    navigate(`/competition/${id}/participants`)
  }
  return (
    <BtnCreate>
      <button onClick={editProject} className="btn btn-red">Edit project</button>
      <button onClick={addMembers} className="btn btn-green">Trouver des coéquipiers</button>
    </BtnCreate>
  );
};
const BtnCreate = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  button{
    margin-bottom: 15px;
  }
`;
export { BtnCreateProject, CreateProject };
