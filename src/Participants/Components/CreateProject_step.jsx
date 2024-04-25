import styled from "styled-components";
import ProjectCard_competition from "./ProjectCard_competition";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import dataJSON from "../../data/data.json";
import Input_Step from "./Steps_components/Input_Step";
import Textarea_Step from "./Steps_components/Textarea_Step";
import Card_project from "./Steps_components/Card_project";
import Image_drag_drop from "./Steps_components/Image_drag_drop";

const CreateProject_step = ({ steps, currentStep, setCurrentStep }) => {
  const [stepInfo, setStepInfo] = useState(steps[currentStep]);
  const navigate = useNavigate();
  useEffect(()=>{
    setStepInfo(steps[currentStep])
  },[currentStep])
  const { id } = useParams();

  const saveProject = async (e) => {
    e.preventDefault();
    if (currentStep < steps.length)
      setCurrentStep(currentStep + 1)
    else
      navigate('/completed')
  };
  const defaultCompetitionCard = dataJSON.competitionDefault;
  const [dataCard, setDataCard] = useState(defaultCompetitionCard);
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
                {item.tag == "input" && (
                  <Input_Step
                    type={item.type}
                    id={item.id}
                    label={item.label}
                    maxCaracter={item.maxCaracter}
                    value={item.value}
                    setDataCard={setDataCard}
                  />
                )}
                {item.tag == "textarea" && (
                  <Textarea_Step
                    type={item.type}
                    id={item.id}
                    label={item.label}
                    maxCaracter={item.maxCaracter}
                    value={item.value}
                    setDataCard={setDataCard}
                  />
                )}
              </div>
            );
          })}
          <Image_drag_drop />

          <button onClick={saveProject} className="btn btn-red">
            Enregistrer && continuer
          </button>
        </form>
        <Card_project setDataCard={setDataCard} dataCard={dataCard} />
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
