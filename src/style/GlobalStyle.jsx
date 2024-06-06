import { createGlobalStyle } from "styled-components";
import { RED_COLOR, GREEN_COLOR, ORANGE_COLOR } from "../style/Colors";

const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: lighter;
    }
    body{
        overflow-x: hidden;
        font-family: 'Arial';
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
        color : ${ORANGE_COLOR}
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
        &:hover{
            color: white;
        }
        /* font-size: 20px; */
        &.btn-red{
            background: ${RED_COLOR};
        }
        &.btn-green{
            background:${GREEN_COLOR};
        }
        &.btn-gray{
            background: #475D65;
        }
    }
    .error{
    color: ${RED_COLOR};
    font-size: 12px;
    padding: 1em;
  }
`;

export default GlobalStyle;
