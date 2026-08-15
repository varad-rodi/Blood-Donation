import { Routes, Route } from "react-router-dom";
import FindDonors from "./Pages/FindDonors";
import RequestBlood from "./Pages/RequestBlood";
import Hospitals from "./Pages/Hospitals";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Blood Donation Pages */}
        <Route path="/find-donors" element={<FindDonors />} />
        <Route path="/request-blood" element={<RequestBlood />} />
        <Route path="/hospitals" element={<Hospitals />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;