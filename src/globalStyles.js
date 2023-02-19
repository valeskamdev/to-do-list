import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    body {
        box-sizing: border-box;
        outline: none;
        margin: 0;
        padding: 0;
    }

    * {
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyles