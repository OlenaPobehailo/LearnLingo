import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Roboto-Regular';
    src: url('/public/fonts/Roboto-Regular.ttf') ;
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto-Medium';
    src: url('/fonts/Roboto-Medium.ttf') ;
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto-Bold';
    src: url('/fonts/Roboto-Bold.ttf') ;
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto-Italic';
    src: url('/fonts/Roboto-Italic.ttf') ;
    font-weight: 400;
    font-style: italic;
  }


:root {
  font-weight: 400;

  color-scheme: light dark;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  --medium: 'Roboto-Medium';
  --bold: 'Roboto-Bold';
  --italic: 'Roboto-Italic'


}
 
 *, *::before, *::after {
    box-sizing: border-box;
  }

  
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

body {
  margin: 0;
  padding: 0;
  min-width: 320px;
  min-height: 100vh;
  font-family: "Roboto-Regular";
  font-size: 16px;
}


h1 {
  font-size: 2em; 
}

h2 {
  font-size: 1.5em; 
}


p {
  font-size: 1em; 
}


p:last-child {
  margin-bottom: 0;
}

ul, ol, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


a{
    text-decoration: none;
};

`;
