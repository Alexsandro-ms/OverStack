import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/routes';

import { GlobalStyle } from './Styles/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
