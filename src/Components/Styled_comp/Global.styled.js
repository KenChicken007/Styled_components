import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        color: hsl(192,100%, 9%);
        font-family: 'Inter';
        font-size: 1.15em;
    }

    p{
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }
`;
