import React, { useState } from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'

// Components
import Landing from './Components/Landing/Landing'

const App = () => {

  const [daytime, setDaytime] = useState(true)

  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {

  }

  return (
    <>
    <Nav daytime={daytime} setDaytime={setDaytime} cash={cash} setCash={setCash}/>
    <main>
      <Routes>
      <Route 
          path='/'
          element={<Landing />}/>
        <Route 
          path='/burgers'
          element={<BurgerShop />}/>
          <Route 
          path='/market'
          element={<SuperMarket handleExchange={handleExchange} />}/>
      </Routes>
    </main>
    </>
  )
}

export default App