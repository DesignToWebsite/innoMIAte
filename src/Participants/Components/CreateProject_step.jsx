import styled from "styled-components";
import ProjectCard_competition from "./ProjectCard_competition";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateProject_step = () => {
    const navigate = useNavigate()
  // Define maximum character limits
  const MAX_NAME_CHARACTERS = 60;
  const MAX_DESCRIPTION_CHARACTERS = 200;

  // Define state variables
  const [dataProject, setDataProject] = useState({
    name: "Sans titre",
    description: "Pas de description",
    team: [],
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0PDg0NDQ0NDQ0NDQ8NDQ4NFhEWFhURExMYHSggGBolGxUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBAUH/8QAMBABAQACAAIGCAcBAQAAAAAAAAECEQMEEiExQVJxFTJRYWKRobEFExQigZKi0XL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/RAAAAAAAAAADQ0GaNNAZo0oBOjSzQI0adDQOejTpo0Dno0vRoEaNLYCdGlMBg2sAAAAAAAAAAAAAAAAAAAAAayKBjRoDdEipATpulaboE6NLkNAjRpejQIZpemaBGmLsZYCBVTQZWNYAAAAAAAAAAAAAAAAAAAABFJioDWyEVAFSEipAZMVSNkVICZG6Xo0COizTthw7l1SW+UdOLyuWGPSuu3Wu2wHk0yx1sTYDlYyulibAc9JrpU0EJVUgAAAAAAAAAAAAAAAAAAAARcRF4gqKjIuA2RWMZHfg8HLL1cbff3fMESKmL28LkPHf4x/69Mxw4fZjd+7G2/MHi4XKZ5d2p7+p6ceUwx68rvz6ozPj8S+rhZ77La4ZY53rsyvnKD0Zc1hj1YzflNRWN/N4dl7bueV7nk/Ly8N+Vd+U3LZZdWey9oPBcU2PbzXBvStktl6+qb63C8HPwZf1oPNYmx1sRYDlU10sRkDlUrqAAAAAAAAAAAAAAAAAAAAAI6YucdMQXF4oi8Qev8AD5jc9ZSXc6t+17+Z5n8vUmPbOr2Pk8PKyyztllj6nN49PhzOd2sv47wOT4uWeWXSvdNTuis+a6Ns6O9X2uX4d25eUc+P6+XmD0fq/h+p+q+H6rnLY613+3byZTVs9lsB6f1Xw/Vl5v4fq8yuJhcdb75sHa858P1duX43T31a179vn16uQ7MvOfYHg4vrZed+7lXbi+tfO/dxoIrnXSudBzyRV5IoAAAAAAAAAAAAAAAAAAAAEdMXOOmILi8XOLgLj6n4fn0sLhe77V8qPVyXF6OePsv7b/IPXyWHRzzxvc48f18vN75w9Z3L24yXzj5/Mevl5g7Y8zlJrq8+9y2rluF07u+rO2+33PTxOWl7P2/YHPluFu7vZOz316eJw5lOvuVjjJJJ2RoPnc1h0curss3HbkOzLzn2bz+O8Zl7L9Kn8OvVl5wHh4vrXzv3csl8W/uy8793Ogioq7UZA55IXkgAAAAAAAAAAAAAAAAAAAACLiIqAuKiIqA6Sqlc5VSg+7yvE6eGN79avnHh5jDLp5axys32yVz5Tm/y5ZZuXr7dar0+kp4L/YDHmOJJqcPUnw5N/VcXwf5yPSM8H1PSM8F+YN/VcTwf5yZ+q4vg/wA5HpGeC/M9IzwfUE8Tj8TKWXDqvV6uTr+HY2TLcs652zTn6SngvzZ6Tngv9geHi392X/q/dztbnlu2+22otBlTk2poIqVVIAAAAAAAAAAAAAAAAAAAAEVEqBqpUNBcqtucqtguVUrnK3YOkrduezYOmzbn0i0FbZck7ZsG2stZtloFqaUBiWsAAAAAAAAAAAAAAAAAAAAAaxoDWAKakBcptICzaGgrZtIDdm07Ng3bGAAMArG1gAAAAAAAAAAAAAAAAAAAABsAaMAaMAUJAUJAUJAUJAaMAaMAbWAAAAAAAAAAAD//2Q==",
  });
  const [remainingNameCharacters, setRemainingNameCharacters] =
    useState(MAX_NAME_CHARACTERS);
  const [remainingDescriptionCharacters, setRemainingDescriptionCharacters] =
    useState(MAX_DESCRIPTION_CHARACTERS);

  // Handle changes in the form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataProject((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Update remaining characters
    if (name === "name") {
      setRemainingNameCharacters(MAX_NAME_CHARACTERS - value.length);
    } else if (name === "description") {
      setRemainingDescriptionCharacters(
        MAX_DESCRIPTION_CHARACTERS - value.length
      );
    }
  };

  
// Gérer les changements d'image
const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDataProject((prevData) => ({
          ...prevData,
          img: reader.result, // Stocker l'image encodée en base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const savePrpject = async(e)=>{
        e.preventDefault()
        navigate("/competition/step1")
  }
  return (
    <ProjectForm>
      <h2>Aperçu du projet</h2>
      <p>
        Veuillez respecter nos <a href="#">directives communautaires</a>.
      </p>
      <Line />
      <h3>General info</h3>
      <div className="generalInfo">
        <form>
          <div className="input projectName">
            <label htmlFor="projectName">Nom du projet</label>
            <input
              type="text"
              name="name"
              id="projectName"
              value={dataProject.name}
              onChange={handleInputChange}
            />
            <p className="charactersLeft">
              {remainingNameCharacters} caractères restants
            </p>
          </div>

          <div className="input projectDescription">
            <label htmlFor="projectDescription">Description du projet</label>
            <textarea
              type="text"
              name="description"
              id="projectDescription"
              rows="4"
              cols="50"
              value={dataProject.description}
              onChange={handleInputChange}
            />
            <p className="charactersLeft">
              {remainingDescriptionCharacters} caractères restants
            </p>
          </div>

          <button onClick={savePrpject} className="btn btn-red">Enregistrer && continuer</button>
          {/* <button className="btn btn-gray">Cancel</button> */}
        </form>
        <div className="cardInfo">
          <ProjectCard_competition data={dataProject} />

          {/* Bouton pour changer la miniature */}
          <label className="btn btn-green" htmlFor="uploadImage">Modifier la miniature</label>
          <input
            type="file"
            id="uploadImage"
            name="uploadImage"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }} // Caché mais associé au label
          />
          <p>
            Format JPG, PNG ou GIF, taille de fichier maximale de 5 Mo. Pour de
            meilleurs résultats, utilisez un rapport de 3:2.
          </p>
        </div>
      </div>
    </ProjectForm>
  );
};

const ProjectForm = styled.div`
  padding: 2em 3em;
  h2 {
    margin-bottom: 1em;
    font-weight: 600;
    font-size: 2.5em;
  }
  h3 {
    font-size: 2.3em;
  }
  .input {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      all: initial;
      padding: 10px 10px;
      border: 1px solid #edf1f2;
    }
    .charactersLeft {
      text-align: end;
      color: #b3b5b6;
      font-size: 17px;
    }
  }
  .btn {
    margin-right: 10px;
  }
  .generalInfo {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 12px;
  }
  .cardInfo {
    display: flex;
    flex-direction: column;
    .btn {
      width: fit-content;
      margin: 1em auto;
    }
    p {
      font-size: 16px;
      padding: 10px;
    }
  }
  .team{
    display: none;
  }
`;

const Line = styled.div`
  height: 3px;
  background-color: #dce6e9;
  margin: 2em 0;
`;

export default CreateProject_step;
