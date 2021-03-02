import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family:sans-serif,tahoma;
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0
}
body{
    background-color: #ddd;
    .container{
        width: 90%;
        margin: 0 auto;
        
    }
}
`;

export default GlobalStyle;
