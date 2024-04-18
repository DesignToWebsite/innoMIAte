import styled from "styled-components"
import Cover_competition from "../Components/Cover_competition"
import Dashboard_competition from "../Components/Dashboard_competition"
import Overview from "./Overview"
    import { ORANGE_COLOR } from "../../style/Colors"
import { Routes, Route, useLocation } from "react-router"

import MyProject_competition from "./MyProject_competition"
const Competition_page = ()=>{
    const location = useLocation()
    return(
        <CompetitionStyle>
        <Cover_competition />
        <div className="content">
            <Dashboard_competition />
            <Routes location={location} key={location.pathname} >
                <Route path="/overview" element={<Overview />} />
                <Route path="/myProject" element={<MyProject_competition />} />
            </Routes>
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