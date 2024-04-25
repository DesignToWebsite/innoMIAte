import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const CreateProject = () => {
  const navigate = useNavigate()
  const rejoindre = async(e)=>{
    if(localStorage.getItem("user")){
      // localStorage.setItem("projectExist", true)
      
      const connectedUser = JSON.parse(localStorage.getItem('user'));
      const competition = {
        competitionId: id,
        project: {
          name: "Sans titre",
          description: "Pas de description",
          team: [],
          img: "data:image/jpeg"
        }
      };

      // Fetch the user data from the server using the connectedUser's ID
      fetch(`http://localhost:8000/user/${connectedUser.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((res) => res.json()) 
        .then((data) => {
          console.log(data)
          if (data.competition) {
            data.competition.push(competition);
            // console.log(data)

            // Update the user data on the server
            fetch(`http://localhost:8000/user/${connectedUser.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then(() => {

                console.log("Competition added to user successfully.");
                setJoinedCompetition(true)
                navigate(`/competition/${id}/createProject`)

              })
              .catch((error) => {
                console.error("Error updating the user data: ", error);
              });
          } else {
            console.error("User data not found or user.competition array is missing.");
          }
        })
        .catch((error) => {
          console.error("Error fetching the user data: ", error);
        });

    
      navigate(`competition/${id}/steps`)
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
