import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Input_Step from "../../competitionPage/project/Steps_components/Input_Step";
import Textarea_Step from "../../competitionPage/project/Steps_components/Textarea_Step";
import Image_drag_drop from "../../competitionPage/project/Steps_components/Image_drag_drop";

const CreateProject_step = ({ stepInfo, stepslenght }) => {
  const navigate = useNavigate();

  const { id, idStep } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(stepInfo);

  // const defaultCompetitionCard = dataJSON.competitionDefault;
  // const [dataCard, setDataCard] = useState(defaultCompetitionCard);

  // console.log(selectedFile)
  const handleFileUpload = async (event) => {
    event.preventDefault();
    const file = selectedFile;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5299/api/Files/upload", {
        method: "POST",
        body: formData,
      });
      const text = await response.text(); // Read response as text
      console.log("Response:", text); // Log the response
      // Parse response as JSON if applicable
      const data = JSON.parse(text);
      console.log("File uploaded:", data.filePath);
      // Store filePath in state or do further processing
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    const next = parseInt(idStep)+1;
    if(next < parseInt(stepslenght))
       navigate(`/competition/${id}/steps/${next}`)
    else
      navigate(`/competition/${id}/steps/completed`)
  };
  return (
    stepInfo && (
      <>
        <ProjectForm className={`step${stepInfo.idStep}`}>
          <h2>{stepInfo.Title}</h2>
          <p>{stepInfo.Info}</p>
          <Line />
          <h3>{stepInfo.SecondTitle}</h3>
          <div className="descriptionStep">
            <form>
              {stepInfo.toComplete?.map((item, index) => {
                return (
                  <div key={index} className="input">
                    {item.tag == "input" && (
                      <Input_Step
                        type={item.type}
                        id={item.id}
                        label={item.label}
                        maxCaracter={item.maxCaracter}
                        value={item.value}
                      />
                    )}
                    {item.tag == "textarea" && (
                      <Textarea_Step
                        type={item.type}
                        id={item.id}
                        label={item.label}
                        maxCaracter={item.maxCaracter}
                        value={item.value}
                      />
                    )}
                    {item.tag == "image" && <Image_drag_drop />}
                  </div>
                );
              })}

              <button onClick={handleFileUpload} className="btn btn-red">
                Enregistrer && continuer
              </button>
            </form>
          </div>
        </ProjectForm>
      </>
    )
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
    margin-bottom: 10px;
    input,
    textarea {
      all: initial;
      padding: 10px 10px;
      border: 1px solid #c4c6c7;
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
  .descriptionStep {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 12px;
  }

  .team {
    display: none;
  }
`;

const Line = styled.div`
  height: 3px;
  background-color: #dce6e9;
  margin: 2em 0;
`;

export default CreateProject_step;
