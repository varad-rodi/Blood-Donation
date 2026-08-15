import { Routes, Route } from "react-router-dom";

import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Department from "./Pages/Department";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/department" element={<Department />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;