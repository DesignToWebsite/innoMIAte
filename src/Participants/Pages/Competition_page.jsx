import styled from "styled-components"
import Cover_competition from "../Components/Cover_competition"
import Dashboard_competition from "../Components/Dashboard_competition"
import Overview from "../Components/Overview"
    import { ORANGE_COLOR } from "../../style/Colors"
const Competition_page = ()=>{
    return(
        <CompetitionStyle>
        <Cover_competition />
        <div className="content">
            <Dashboard_competition />
            
            <Overview />
        </div>
        
        
        </CompetitionStyle>
    )
}

const CompetitionStyle = styled.div`
    .content{
        display: grid;
        grid-template-columns: 1fr 5fr;
    }
    a{
        color:${ORANGE_COLOR};
        
    }
`

export default Competition_page