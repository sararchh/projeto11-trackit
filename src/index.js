import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/GlobalStyles';
import { UserContextProvider } from './Contexts/userContext';
import RoutesApp from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-circular-progressbar/dist/styles.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <UserContextProvider>
        <RoutesApp />
      </UserContextProvider>
    </BrowserRouter>
    <ToastContainer />
  </>
);


