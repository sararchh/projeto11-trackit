import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateAccount from '../pages/CreateAccount';
import CurrentDay from '../pages/CurrentDay';
import Home from '../pages/Home/Home';

const NotFound = () => {
  return (
    <p>Não encontrado</p>
  )
}

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<CreateAccount />} />
        <Route path='/hoje' element={<CurrentDay />} />

      </Routes>
    </>
  )
}

export default RoutesApp;