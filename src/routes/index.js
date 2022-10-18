import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home/Home';

const NotFound = () => {
  return (
    <p>Não encontrado</p>
  )
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<CreateAccount />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;