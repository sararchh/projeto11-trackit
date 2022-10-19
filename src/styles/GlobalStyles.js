import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');

:root{
  --background:  #E5E5E5;
  --blue: #126ba5;
  --blue-100: #52B6FF;
  --green: #8fc549;
  --white: #ffffff;
  --white-100: #e6e7e8;
  --pink: #e75766;
  --text:  #DBDBDB;
  --disabled: #F2F2F2;
  --text-disabled: #AFAFAF;
  --text-historic: #666666;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior:smooth;
  
  @media (max-width: 1080px){
    font-size: 93.75%; /* 15px */
  }
  @media (max-width: 720px){
    font-size: 87.5%; /* 14px */
  }
}

body{
  -webkit-font-smoothing: antialiased;
  max-width: 375px;
  width: 375px;
  box-sizing: border-box;
  overflow-x: hidden;
  background: var(--background);
}

body, input, textarea, button {
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: transparent;
}

h1, h2, h3, h4, h5, h6, strong {
 font-weight: 400;
 font-family: 'Lexend Deca', sans-serif;
}

p {
  font-family: 'Lexend Deca', sans-serif;}

button{
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Lexend Deca', sans-serif;}

a{
  text-decoration: none;
  text-align: center;
}


`