import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }
  
  html,body {
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  
ul {
  list-style: none;
}
  button {
    width: 152px;
    height: 51px;
    border-radius: 4px;
    background: #0A61F7;
    font-size: 14px;
    color: white;
    font-weight: 500;
    border: none;
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  section:nth-of-type(odd) {
    background-color: #FFFFFF;
  }

  section:nth-of-type(even) {
    background-color: #F9FAFC;
  }
  
`