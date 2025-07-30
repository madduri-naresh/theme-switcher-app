import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial, sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.5s ease, color 0.5s ease;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
    p {
  white-space: normal !important;          
  word-break: break-word !important;        
  overflow-wrap: break-word !important;     
}
`;
