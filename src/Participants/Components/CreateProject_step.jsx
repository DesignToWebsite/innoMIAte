// import styled from "styled-components";
// import ProjectCard_competition from "./ProjectCard_competition";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import dataJSON from "../../data/data.json";
// import Input_Step from "./Steps_components/Input_Step";
// import Textarea_Step from "./Steps_components/Textarea_Step";
// import Card_project from "./Steps_components/Card_project";
// import Image_drag_drop from "./Steps_components/Image_drag_drop";

// const CreateProject_step = ({ steps, currentStep, setCurrentStep }) => {
//   const [stepInfo, setStepInfo] = useState(steps[currentStep]);
//   const navigate = useNavigate();
//   useEffect(()=>{
//     setStepInfo(steps[currentStep])
//   },[currentStep])
//   const { id } = useParams();

//   const saveProject = async (e) => {
//     e.preventDefault();
//     if (currentStep < steps.length)
//       setCurrentStep(currentStep + 1)
//     else
//       navigate('/completed')
//   };
//   const defaultCompetitionCard = dataJSON.competitionDefault;
//   const [dataCard, setDataCard] = useState(defaultCompetitionCard);
//   return (
//     <ProjectForm className={`step${stepInfo.idStep}`}>
//       <h2>{stepInfo.Title}</h2>
//       <p>{stepInfo.description}</p>
//       <Line />
//       <h3>{stepInfo.SecondTitle}</h3>
//       <div className="descriptionStep">
//         <form>
//           {stepInfo.toComplete.map((item, index) => {
//             return (
//               <div key={index} className="input">
//                 {item.tag == "input" && (
//                   <Input_Step
//                     type={item.type}
//                     id={item.id}
//                     label={item.label}
//                     maxCaracter={item.maxCaracter}
//                     value={item.value}
//                     setDataCard={setDataCard}
//                   />
//                 )}
//                 {item.tag == "textarea" && (
//                   <Textarea_Step
//                     type={item.type}
//                     id={item.id}
//                     label={item.label}
//                     maxCaracter={item.maxCaracter}
//                     value={item.value}
//                     setDataCard={setDataCard}
//                   />
//                 )}
//                 {item.tag == "image" && (
//                   <Image_drag_drop/>
//                 )}
//               </div>
//             );
//           })}

//           <button onClick={saveProject} className="btn btn-red">
//             Enregistrer && continuer
//           </button>
//         </form>
//         {stepInfo.infoWithCard &&
//           <Card_project setDataCard={setDataCard} dataCard={dataCard} />}
//       </div>
//     </ProjectForm>
//   );
// };

// const ProjectForm = styled.div`
//   padding: 2em 3em;
//   h2 {
//     margin-bottom: 1em;
//     font-weight: 600;
//     font-size: 2.5em;
//   }
//   h3 {
//     font-size: 2.3em;
//   }
//   .input {
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 10px;
//     input,
//     textarea {
//       all: initial;
//       padding: 10px 10px;
//       border: 1px solid #c4c6c7;
//     }
//     .charactersLeft {
//       text-align: end;
//       color: #b3b5b6;
//       font-size: 17px;
//     }
//   }
//   .btn {
//     margin-right: 10px;
//   }
//   .descriptionStep {
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//     gap: 12px;
//   }

//   .team {
//     display: none;
//   }
// `;

// const Line = styled.div`
//   height: 3px;
//   background-color: #dce6e9;
//   margin: 2em 0;
// `;

// export default CreateProject_step;

import styled from "styled-components";
import ProjectCard_competition from "./ProjectCard_competition";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import dataJSON from "../../data/data.json";
import Input_Step from "./Steps_components/Input_Step";
import Textarea_Step from "./Steps_components/Textarea_Step";
import Card_project from "./Steps_components/Card_project";
import Image_drag_drop from "./Steps_components/Image_drag_drop";

const CreateProject_step = () => {
  const navigate = useNavigate();
 
  const { id } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

 
  const defaultCompetitionCard = dataJSON.competitionDefault;
  const [dataCard, setDataCard] = useState(defaultCompetitionCard);
  const steps = [
    {
      "idStep": 1,
      "infoWithCard": true,
      "Title": "Step 1 ",
      "completed": true,
      "Info": "Information entered below will appear on your public project page.",
      "toComplete": [
        {
          "type": "text",
          "tag": "textarea",
          "label": "About the project",
          "description": "Be sure to write what inspired you, what you learned, how you built your project, and the challenges you faced. Format yourstory in Markdown.",
          "placeholder": " ## Inspiration",
          "required": true,
          "value": "",
          "mulipleValues": false,
          "id": "about"
        },
        {
          "type": "text",
          "tag": "input",
          "label": "Built with",
          "description": "What languages, frameworks, platforms, cloud services, databases, APIs, or other technologies did you use?",
          "placeholder": "Languages, frameworks, platforms, cloud services, databases, APIs, etc.",
          "required": true,
          "value": "",
          "mulipleValues": false,
          "id": "builtWith"
        },
        {
          "type": "text",
          "tag": "input",
          "label": "Links",
          "description": "Add links where people can try your project or see your code.",
          "required": false,
          "value": [],
          "mulipleValues": true,
          "id": "links"
        },
        {
          "type": "text",
          "tag": "input",
          "label": " Video demo link",
          "description": "This video will be embedded at the top of your project page. Read more about uploading videos.",
          "required": true,
          "value": "",
          "mulipleValues": false,
          "id": "videoLink"
        }
      ]
    },
    {
      "idStep": 2,
      "completed": false,
      "Title": "Create project",
      "Info": "Veuillez respecter nos <a href=\"#\">directives communautaires</a>.",
      "SecondTitle": "General info",
      "infoWithCard": false,
      "toComplete": [
        {
          "type": "text",
          "tag": "input",
          "label": "Nom du projet",
          "description": "",
          "placeholder": "",
          "required": true,
          "value": "",
          "mulipleValues": false,
          "maxCaracter": 60,
          "id": "projectName"
        },
        {
          "type": "text",
          "tag": "textarea",
          "label": "Description du projet",
          "description": "",
          "placeholder": "",
          "required": true,
          "value": "",
          "mulipleValues": false,
          "maxCaracter": 200,
          "id": "projectDescription"
        }
      ]
    }
  ]
  console.log(selectedFile)
  const handleFileUpload = async (event) => {
    event.preventDefault()
    const file = selectedFile;
    const formData = new FormData();
    formData.append('file', file);
  
    try {
        const response = await fetch('http://localhost:5299/api/Files/upload', {
            method: 'POST',
            body: formData
        });
        const text = await response.text(); // Read response as text
        console.log('Response:', text); // Log the response
        // Parse response as JSON if applicable
        const data = JSON.parse(text);
        console.log('File uploaded:', data.filePath);
        // Store filePath in state or do further processing
    } catch (error) {
        console.error('Error uploading file:', error);
    }
  };
  const stepInfo = steps[0]
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
                {item.tag == "image" && (
                  <Image_drag_drop/>
                )}
              </div>
            );
          })}
                  
          <button onClick={handleFileUpload}  className="btn btn-red">
            Enregistrer && continuer
          </button>
        </form>
        {/* {stepInfo.infoWithCard && */}
          <Card_project setDataCard={setDataCard} setSelectedFile={setSelectedFile} dataCard={dataCard} />
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

