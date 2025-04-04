import React from 'react'
import Header from './components/Header/Header'
import { Home } from './components/Home/Home'
import Offers from './components/Offers/Offers'
import { Welcome } from './components/Welcome/Welcome'
import { Footer } from './components/Footer/Footer'
import './App.scss'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <Offers/>
        <Welcome />
      </main>
      <Footer />
    </>
  )
}

export default App
