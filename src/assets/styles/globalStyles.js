import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
box-sizing: border-box;
font-size: 20px;
/* scroll-behavior: smooth; */

}

*, *::after, *::before {
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
    font-family: 'Playfair Display', sans-serif;
    /* background-color: #555; */
}

a, button {
    font-family: "Helvetica",'Playfair Display';
    font-weight: 400;

} 
@font-face {
    font-family: "Wolfgang";
    src: url("/fonts/Wolfgang.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
}
`;
