import { Link } from "react-router-dom"
import styled from "styled-components"



const Card = ()=>{
    return(
        <Link to="competition">
        <CardStyle>
            competition
        </CardStyle>
        </Link>
    )
}

const CardStyle = styled.div`
    width: 200px ;
    height: 200px;
    border: 1px solid black;
    font-weight: bold;
`

export default Card