import { useNavigate } from "react-router";
import styled from "styled-components";

const CreateProject = () => {
  const navigate = useNavigate()
  const rejoindre = async(e)=>{
    if(localStorage.getItem("user")){
      localStorage.setItem("projectExist", true)
      navigate("/createProject")
    }
  }
  return (
    <Create>
      <h2>Mon projet de hackathon</h2>
      <div className="create">
        <p>
          Démarrez un projet pour commencer votre soumission et inviter des
          coéquipiers
        </p>
        <button onClick={rejoindre}  className="btn btn-red">Rejoignez le hackathon</button>
      </div>
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
  return (
    <BtnCreate>
      <button className="btn btn-red">Démarrer le projet</button>
      <button className="btn btn-green">Trouver des coéquipiers</button>
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
