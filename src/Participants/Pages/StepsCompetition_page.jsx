import CreateProject_step from "../Components/CreateProject_step"
import StepsMenu from "../Components/StepsMenu"

const StepsCompetition_page = ()=>{
    
    return(
        <div className="steps">
            <StepsMenu />
            <CreateProject_step />
        </div>
    )
}

export default StepsCompetition_page