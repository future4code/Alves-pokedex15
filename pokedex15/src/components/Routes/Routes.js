import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Detalhes from '../pages/Detalhes/Detalhes'
import Home from '../pages/Home/Home'
import Pokedex from '../pages/Pokedex/Pokedex'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/detalhes" element={<Detalhes />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
