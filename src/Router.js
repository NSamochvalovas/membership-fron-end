import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/add' element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default router
