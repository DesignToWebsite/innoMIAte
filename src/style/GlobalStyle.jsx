import { createGlobalStyle } from "styled-components";
import { RED_COLOR, GREEN_COLOR } from "../style/Colors";

const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: lighter;
    }
    body{
        overflow-x: hidden;
        font-family: 'Open Sans', sans-serif;
        /* background-color: #6a6969; */
        color: black;
    }
    img{
        object-fit: cover;
    }
    ul{
        list-style: none;
        
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;

    }
    p{
        font-size: 18px;
    }
    .btn{
        border: none;
        border-radius: 0;
        padding: 10px 30px;
        color: white;
        /* font-size: 20px; */
        &.btn-red{
            background: ${RED_COLOR};
        }
        &.btn-green{
            background:${GREEN_COLOR};
        }
    }
    
`;

export default GlobalStyle;
