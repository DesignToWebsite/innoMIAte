import styled from "styled-components";
import ProjectCard_competition from "../ProjectCard_competition";
import { useState } from "react";
import axios from "axios";

const Card_project = ({ dataCard, setDataCard, setSelectedFile }) => {
  // const [selectedFile, setSelectedFile] = useState(null);
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

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



  // const handleFileUpload = async (event) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);
  
  //   try {
  //       const response = await fetch('http://localhost:5299/api/Files/upload', {
  //           method: 'POST',
  //           body: formData
  //       });
  //       const text = await response.text(); // Read response as text
  //       console.log('Response:', text); // Log the response
  //       // Parse response as JSON if applicable
  //       const data = JSON.parse(text);
  //       console.log('File uploaded:', data.filePath);
  //       // Store filePath in state or do further processing
  //   } catch (error) {
  //       console.error('Error uploading file:', error);
  //   }
  // };

  return (
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
            {/* <input type="file" onChange={handleFileUpload} /> */}

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
`;

export default Card_project;
