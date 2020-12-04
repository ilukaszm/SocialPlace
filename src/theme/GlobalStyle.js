import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        ::selection{
            background-color: rgba(237, 37, 78, 0.66);
        }
    }

    html{
       font-family: 'Montserrat', sans-serif;
    }

    button{
        cursor: pointer;
    }

`;

export default GlobalStyle;
