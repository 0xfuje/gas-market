import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import {Provider} from 'react-redux'
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);