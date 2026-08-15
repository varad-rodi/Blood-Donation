import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import Department from './Pages/Department';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/department" element={<Department />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
