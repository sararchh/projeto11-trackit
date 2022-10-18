import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/GlobalStyles';
import { UserContextProvider } from './Contexts/userContext';
import RoutesApp from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <GlobalStyle />
    <RoutesApp/>
  </UserContextProvider>
);


