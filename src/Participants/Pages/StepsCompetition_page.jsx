import { useEffect, useState } from "react"
import CreateProject_step from "../Components/CreateProject_step"
import StepsMenu from "../Components/StepsMenu"
import { useParams } from "react-router"
import ManageTeam from "../Components/ManageTeam"

const StepsCompetition_page = ()=>{
    const {id} = useParams()
    const [steps, setSteps] = useState(null)
    const [currentStep, setCurrentStep] = useState(0) 
    // const 
    useEffect(()=>{
        fetch(`http://localhost:8000/competition?id=${id}`)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setSteps(data[0].steps)
            })
      },[])
      useEffect(() => {
        console.log('currentStep has changed:', currentStep);
        setManageTeam(currentStep=="manageTeam"? true :false)
    }, [currentStep]);
    const [manageTeam, setManageTeam] = useState(currentStep=="manageTeam"? true :false);

    return(
        <div className="steps">
            { steps && <StepsMenu currentStep={currentStep} setCurrentStep={setCurrentStep} steps={steps} />}
            { steps && !manageTeam  && <CreateProject_step currentStep={currentStep}  setCurrentStep={setCurrentStep} steps={steps} />}
            { steps && manageTeam && <ManageTeam />}
        </div>
    )
}

export default StepsCompetition_page