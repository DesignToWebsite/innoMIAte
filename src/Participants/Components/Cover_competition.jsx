import styled from "styled-components"

const Cover_competition = ({data})=>{
    return(
        <Cover>
            <img src={data.coverPhoto} alt="" />
            
        </Cover>
    )
}

const Cover = styled.div`
    width: 100vw;
    height: 40vh;
    img{
        width: 100%;
        height: 100%;
    }
`

export default Cover_competition