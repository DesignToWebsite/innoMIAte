import { Link } from "react-router-dom"
import styled from "styled-components"



const Card = ({data})=>{
    return(
        <Link to={`/competition/${data.id}/overview`}>
        <CardStyle>
            {data.title} {data.id}
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