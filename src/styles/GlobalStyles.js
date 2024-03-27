import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  font-weight: 400;

  color-scheme: light dark;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
