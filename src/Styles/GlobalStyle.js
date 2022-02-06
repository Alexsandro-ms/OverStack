import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    /* Roboto Font */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap');


    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color: var(--color-backgroundColor);
    }

    input, select{
        outline: none;
    }

    :root{
        /* Colors */
        --color-primary: #bf00b5;
        --color-white: #fff;
        --color-gray: #5f5f5f;
        --color-gradient: linear-gradient(155.34deg, #8257e6 -0.59%, #bf00b5 80%);
        --color-gradient-hover: linear-gradient(155.34deg, #bf00b5 -0.59%, #8257e6 80%);
        --color-gradient-hover: linear-gradient(155.34deg, #bf00b5 -0.59%, #8257e6 80%);
        --color-backgroundColor: #121214;
        
        --border-radius: 8px;
    }
`