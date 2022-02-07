import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import {Provider} from 'react-redux'
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);