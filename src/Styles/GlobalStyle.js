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
    }
`