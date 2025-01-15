//import { useState } from 'react'

import {BrowserRouter, Link, Route, Routes } from "react-router-dom"
import LandingPage from "./components/Pages/landingPage"
import Header from "./components/header/header"
import SimpleLink from "./components/link&btn/simpleLink"
import Logo from "./components/logo/logo"
import Footer from "./components/footer/footer"
import Team from "./components/Pages/team"
import Contact from "./components/Pages/contact"

function App() {

  return (
      <BrowserRouter>
          <Header className ="bg-white w-full h-20 flex justify-between items-center px-16 shadow-md shadow-black/20 z-10">
                          <Logo className="w-24 h-24 p-3"/>
                          <nav id="navElement" className="h-full px-10 hidden md:lg:w-42 md:lg:flex flex-row items-center justify-center gap-12">
                                  <SimpleLink to={`/`} className="text-md text-black p-2 rounded-lg hover:bg-blue-200 font-semibold" children='Acceuil'/>
                                  <SimpleLink to={`/team`} className="text-md text-black  font-semibold bg-none p-2 rounded-lg hover:bg-blue-200" children='Equipe'/>
                                  <SimpleLink to={`/`} className="text-md text-black  font-semibold bg-none p-2 rounded-lg hover:bg-blue-200" children='Actualités'/>
                          </nav>
                          
                          <div className="w-auto h-3/5 rounded-xl bg-blue-950 p-3 flex justify-center items-center shadow-black shadow-md hover:border-2 hover:border-blue-950 hover:bg-white hover:text-blue-950">
                              <Link to={`/contact`} className="md:text-sm lg:text-md text-[#EDDD5E] font-semibold text-nowrap hover:text-blue-950">Contactez-nous</Link>
                          </div>
          </Header>
        <Routes>
          <Route path="/" index element={<LandingPage/>}/> 
        </Routes>
        <Routes>
          <Route path="/team" index element={<Team/>}/> 
        </Routes>
        <Routes>
          <Route path="/contact" index element={<Contact/>}/> 
        </Routes>
        <Footer/>
      
      </BrowserRouter>
  )
}

export default App
