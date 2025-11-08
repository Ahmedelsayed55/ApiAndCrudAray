import React from 'react'
import Phones from './Phones'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Phones />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
