import styled from "styled-components";
import { RED_COLOR } from "../../style/Colors";



const InProgress = ()=>{
    return(
        <LoadingIndicator>

        </LoadingIndicator>
    )
}

const LoadingIndicator = styled.div`
width: 20px;
height: 20px;
border: 4px solid #ffffff;
border-top: 4px solid ${RED_COLOR};
border-radius: 50%;
animation: spin 1s linear infinite;
margin: 1em auto;
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default InProgress