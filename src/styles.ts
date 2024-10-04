import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: none !important;

  }

  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }
`

export default GlobalStyles
