import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 500;
    }

    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 9.1rem;
        padding-bottom: 4.5rem;

        @media (min-width: 90em) {
            flex-direction: row;
            gap: 34.9rem;
            padding: 0;
        }
    }

    canvas {
        width: 100vw;
    }
`;
