import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Roboto-Regular';
    src: url('/fonts/Roboto-Regular.ttf') ;
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

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --regular: 'Roboto-Regular', sans-serif;
  --medium: 'Roboto-Medium', sans-serif;
  --bold: 'Roboto-Bold', sans-serif;
  --italic: 'Roboto-Italic', sans-serif;

  --dash-length: 15px;

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
  font-family: "Roboto", sans-serif;
  font-size: 16px;
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
