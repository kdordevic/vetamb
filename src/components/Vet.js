import React from "react";
import Contact from "./Contact.js";
import Gallery from "./Gallery.js";
import Practice from "./Practice.js";
import About from "./About.js";
import Privacy from "./Privacy.js";
import Homepage from "./Homepage.js";
import Questions from "./Questions.js";
import Services from "./Services.js";
import Footer from "./Footer.js";
import NotFound from "./NotFound.js";
import "../style/Nav.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Vet() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/questions" element={<Questions />}></Route>
              <Route path="/practice" element={<Practice />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/gallery" element={<Gallery />}></Route>
              <Route path="/privacy" element={<Privacy />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
}

export default Vet
