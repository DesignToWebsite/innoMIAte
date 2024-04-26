import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const CreateProject = ({setJoinedCompetition, joinedCompetition}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  const rejoindre = async(e)=>{
    if(localStorage.getItem("user")){      
      const connectedUser = JSON.parse(localStorage.getItem('user'));
      const competition = {
        competitionId: id,
        project: {
          name: "Sans titre",
          description: "Pas de description",
          team: [],
          img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0PDg0NDQ0NDQ0NDQ8NDQ4NFhEWFhURExMYHSggGBolGxUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBAUH/8QAMBABAQACAAIGCAcBAQAAAAAAAAECEQMEEiExQVJxFTJRYWKRobEFExQigZKi0XL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/RAAAAAAAAAADQ0GaNNAZo0oBOjSzQI0adDQOejTpo0Dno0vRoEaNLYCdGlMBg2sAAAAAAAAAAAAAAAAAAAAAayKBjRoDdEipATpulaboE6NLkNAjRpejQIZpemaBGmLsZYCBVTQZWNYAAAAAAAAAAAAAAAAAAAABFJioDWyEVAFSEipAZMVSNkVICZG6Xo0COizTthw7l1SW+UdOLyuWGPSuu3Wu2wHk0yx1sTYDlYyulibAc9JrpU0EJVUgAAAAAAAAAAAAAAAAAAAARcRF4gqKjIuA2RWMZHfg8HLL1cbff3fMESKmL28LkPHf4x/69Mxw4fZjd+7G2/MHi4XKZ5d2p7+p6ceUwx68rvz6ozPj8S+rhZ77La4ZY53rsyvnKD0Zc1hj1YzflNRWN/N4dl7bueV7nk/Ly8N+Vd+U3LZZdWey9oPBcU2PbzXBvStktl6+qb63C8HPwZf1oPNYmx1sRYDlU10sRkDlUrqAAAAAAAAAAAAAAAAAAAAAI6YucdMQXF4oi8Qev8AD5jc9ZSXc6t+17+Z5n8vUmPbOr2Pk8PKyyztllj6nN49PhzOd2sv47wOT4uWeWXSvdNTuis+a6Ns6O9X2uX4d25eUc+P6+XmD0fq/h+p+q+H6rnLY613+3byZTVs9lsB6f1Xw/Vl5v4fq8yuJhcdb75sHa858P1duX43T31a179vn16uQ7MvOfYHg4vrZed+7lXbi+tfO/dxoIrnXSudBzyRV5IoAAAAAAAAAAAAAAAAAAAAEdMXOOmILi8XOLgLj6n4fn0sLhe77V8qPVyXF6OePsv7b/IPXyWHRzzxvc48f18vN75w9Z3L24yXzj5/Mevl5g7Y8zlJrq8+9y2rluF07u+rO2+33PTxOWl7P2/YHPluFu7vZOz316eJw5lOvuVjjJJJ2RoPnc1h0curss3HbkOzLzn2bz+O8Zl7L9Kn8OvVl5wHh4vrXzv3csl8W/uy8793Ogioq7UZA55IXkgAAAAAAAAAAAAAAAAAAAACLiIqAuKiIqA6Sqlc5VSg+7yvE6eGN79avnHh5jDLp5axys32yVz5Tm/y5ZZuXr7dar0+kp4L/YDHmOJJqcPUnw5N/VcXwf5yPSM8H1PSM8F+YN/VcTwf5yZ+q4vg/wA5HpGeC/M9IzwfUE8Tj8TKWXDqvV6uTr+HY2TLcs652zTn6SngvzZ6Tngv9geHi392X/q/dztbnlu2+22otBlTk2poIqVVIAAAAAAAAAAAAAAAAAAAAEVEqBqpUNBcqtucqtguVUrnK3YOkrduezYOmzbn0i0FbZck7ZsG2stZtloFqaUBiWsAAAAAAAAAAAAAAAAAAAAAaxoDWAKakBcptICzaGgrZtIDdm07Ng3bGAAMArG1gAAAAAAAAAAAAAAAAAAAABsAaMAaMAUJAUJAUJAUJAaMAaMAbWAAAAAAAAAAAD//2Q=="
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
                navigate(`/competition/${id}/steps`)

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

    
      // navigate(`competition/${id}/steps`)
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
