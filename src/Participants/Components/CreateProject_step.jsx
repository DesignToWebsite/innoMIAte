import styled from "styled-components";
import ProjectCard_competition from "./ProjectCard_competition";
import { useState } from "react";
import { useNavigate } from "react-router";
import data from "../../data/data.json";
import Input_Step from "./Steps_components/Input_Step";
import Textarea_Step from "./Steps_components/Textarea_Step"
import Card_project from "./Steps_components/Card_project";

const CreateProject_step = () => {
  const stepInfo = data.projectSteps[1];
  const navigate = useNavigate();
 

  const saveProject = async (e) => {
    e.preventDefault();
    navigate("/competition/step1");
  };

  return (
    <ProjectForm className={`step${stepInfo.idStep}`}>
      <h2>{stepInfo.Title}</h2>
      <p>{stepInfo.description}</p>
      <Line />
      <h3>{stepInfo.SecondTitle}</h3>
      <div className="descriptionStep">
        <form>
          {stepInfo.toComplete.map((item, index) => {
            return (
              <div key={index} className="input">
                { item.tag == "input" &&
                  <Input_Step 
                    type={item.type} 
                    id={item.id} 
                    label={item.label}
                    maxCaracter={item.maxCaracter}
                    value={item.value}
                     />
                }
                {
                  item.tag == "textarea" &&
                  <Textarea_Step 
                    type={item.type} 
                    id={item.id} 
                    label={item.label}
                    maxCaracter={item.maxCaracter}
                    value={item.value}
                     />
                }
              </div>
            );
          })}

          <button onClick={saveProject} className="btn btn-red">
            Enregistrer && continuer
          </button>
        </form>
        <Card_project />
        
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
