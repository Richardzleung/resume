import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'

import './index.css';
import App from './App';
import * as theme from './styles/colors';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

