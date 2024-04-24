import styled from "styled-components";
import ProjectCard_competition from "../ProjectCard_competition";
import { useState } from "react";

const Card_project = ({dataCard, setDataCard}) => {

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setDataCard((prevData) => ({
              ...prevData,
              img: reader.result, // Stocker l'image encodée en base64
            }));
          };
          reader.readAsDataURL(file);
        }
      };
  return(
    <Card>
      <div className="cardInfo">
        <ProjectCard_competition data={dataCard} />
        <label className="btn btn-green" htmlFor="uploadImage">
          Modifier la miniature
        </label>
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
    </Card>
  );
};

const Card = styled.div`
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
`

export default Card_project