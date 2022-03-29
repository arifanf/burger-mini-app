import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import BurgerMaker from './Pages/BurgerMaker'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burger-maker" element={<BurgerMaker />} />
      </Routes>
    </>
  );
}

export default App;
