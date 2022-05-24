import { createGlobalStyle } from 'styled-components'

// template literal ( `` )
// Boas Práticas 
export const GlobalStyle = createGlobalStyle`
:root {
    --background: #ffffff;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html {
    @media (max-width: 1680px) {
    font-size: 93.75%;
    }
    @media (max-width: 720px){
    font-size: 87.5%;
    }
}
// com essa pratica a resolução acompanha o tamanho da tela

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: Arial, Helvetica, sans-serif;
}
h1, h2, h3, h4, h5, h6, strong {
font-weight: 600;
}

button {
    cursor: pointer;
}
[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`