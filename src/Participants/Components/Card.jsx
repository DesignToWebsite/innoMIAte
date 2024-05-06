import { Link } from "react-router-dom"
import styled from "styled-components"
import CardCompetitionInfo from "./CardCompetitionInfo"



const Card = ({data})=>{
    console.log(data)
    return(
        <CardStyle>
        <Link to={`/competition/${data.url}/overview`}>

            <div className="img">
                <img src={data.image} alt="" />
            </div>
            <div className="content">
                <h2>{data.title}</h2>
                <CardCompetitionInfo className="cardHome" data={data}/>
            </div>
        </Link>

        </CardStyle>
    )
}

const CardStyle = styled.div`
    max-width: 300px ;
    //height: 200px;
    border: 1px solid #d9d9d9;
    font-weight: bold;
    a{
        color: black ;

    }
    .img{
        img{
            width: 100%;
            height: 200px;
        }
    }
    h2{
        padding: 10px 0 0px 5px;

    }
`

export default Card