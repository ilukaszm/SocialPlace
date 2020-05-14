import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';

const Button = styled.button`
  background-color: ${({ theme }) => theme.red || 'white'};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1>Hi socialApp!</h1>
        <Button>add</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
