import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;