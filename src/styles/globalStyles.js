import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: 'Poppins', sans-serif;
    }

    body {
        padding-top: 10rem;
        height: 100vh;
        width: 100vw;
        font-size: 1.6rem;
        overflow-x: hidden;
    }

    body::after {
        content: '';
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
        z-index: -1;
    }

`;
