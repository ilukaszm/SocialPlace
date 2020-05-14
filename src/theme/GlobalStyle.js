import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
       font-family: 'Montserrat', sans-serif;
    }

`;

export default GlobalStyle;
