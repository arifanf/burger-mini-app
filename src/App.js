import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layouts/Layout'
import Home from './Pages/Home'
import BurgerMaker from './Pages/BurgerMaker'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burger-maker" element={<BurgerMaker />} />
      </Routes>
    </Layout>
  );
}

export default App;
