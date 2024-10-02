import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: none !important;

  }

  body {
    margin: 0;
    font-family: Helvetica, sans-serif !important;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }
`

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
`

export default GlobalStyles
