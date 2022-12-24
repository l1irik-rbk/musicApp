import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './index.css';
import App from './App';
import { store } from './Redux/store';
import { GLobalStyle } from './GlobalStyle';
import { BaseTheme } from './theme/BaseTheme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider theme={BaseTheme}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <GLobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
