import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateAccount from '../pages/CreateAccount';
import CurrentDay from '../pages/CurrentDay';
import Habits from '../pages/Habits';
import Historic from '../pages/Historic';
import Home from '../pages/Home/Home';
import UserAccount from '../pages/UserAccount';

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
        <Route path='/habitos' element={<Habits />} />
        <Route path='/historico' element={<Historic />} />
        <Route path='/conta' element={<UserAccount />} />

      </Routes>
    </>
  )
}

export default RoutesApp;