import { createGlobalStyle } from "styled-components";
import { RED_COLOR, GREEN_COLOR, ORANGE_COLOR, ORANGE_COLOR_DARK, GRAY_COLOR } from "../style/Colors";

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
        text-decoration: none !important;
        color : ${ORANGE_COLOR}
      
    }
    .alertInfo{
    font-size: 1em;
    color: ${GRAY_COLOR};
    display: flex;
    align-items: center;
    
  }
    button{
        cursor: pointer;

    }
    p{
        font-size: 18px;
    }
    input{
        outline: none;
    }
    .btn{
        border: none;
        border-radius: 0;
        padding: 10px 30px;
        color: white;
       white-space: normal;
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
    color: ${RED_COLOR} !important;
    font-size: 12px;
    /* padding: 1em; */
    font-weight: bold;
  }
`;

export default GlobalStyle;
