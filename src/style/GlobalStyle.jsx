import { createGlobalStyle } from "styled-components";

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
    
`;

export default GlobalStyle;
