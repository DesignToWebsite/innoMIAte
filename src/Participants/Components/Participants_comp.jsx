import styled from "styled-components"
import usersIcon from "../../assets/dashboard_competition/Users.png"

const Participants_comp = ()=>{
    const logged = localStorage.getItem("user")
return(
    <Participants>
{!logged && 
<div className="message">
<div className="img">
    <img src={usersIcon} alt="" />
</div>
</div>
}
    </Participants>
)
}

const Participants = styled.div`
    
`

export default Participants_comp