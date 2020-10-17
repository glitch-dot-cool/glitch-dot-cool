import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    html {
        font-size: 10px;
    }

    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 3rem;
    }

    h3 {
        font-size: 2.34rem;
    }

    h4 {
        font-size: 2rem;
    }

    h5 {
        font-size: 1.8rem;
    }

    h6 {
        font-size: 1.6rem;
    }

    p,
    a,
    li,
    label {
        font-size: 2rem;
    }

    pre {
      border-radius: 3px;
      padding: 1.5rem !important;
    }

    code {
      span {
        font-family: "Roboto Mono", monospace;
        font-size: 1.6rem; 
      }
    }
    
    h1,h2,h3,h4,h5,p,blockquote,li{
        color: ${props => props.theme.colors.scale_1};
        transition: 0.6s ease-in-out color;
    }
    
    body {
        transition: 0.6s ease-in-out background-color;
    }
    
    blockquote {
        background-color: ${props => props.theme.colors.scale_4};
        border-left: 10px solid rgb(128, 128, 128);
        margin: 1.5em 10px;
        padding: 0.5em 10px;
    }

    blockquote:before {
        color: ${props => props.theme.colors.scale_1};
        content: open-quote;
        font-size: 8rem;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }

    hr {
        margin: 2rem 0;
    }

    body {
        background-color: #e6e6e6;
    }

    iframe {
        width: 100%;
        padding: 1rem 0;
    }

        iframe.youtube {
        min-height: 40rem;
    }

    :root {
        overflow-y: scroll;
        scrollbar-color: #4b4b4b #191919;
    }

    ::-webkit-scrollbar {
        width: 0.9rem;
        height: 0.9rem;
        background-color: #191919;
    }

    ::-webkit-scrollbar-thumb {
        width: 0.9rem;
        background-color: #4b4b4b;
    }

    ::-webkit-scrollbar-thumb:hover {
        width: 0.9rem;
        background-color: #5b5b5b;
    }

    ::selection {
        background: #191919;
        color: #e6e6e6;
    }
`

export default GlobalStyles
