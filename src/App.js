import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import './App.css';
// import Navbar from './Navbar.js'
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import Gallery from './Gallery.js';
import Practice from './Practice';
import About from './About.js';
import Homepage from './Homepage.js';
import Questions from './Questions.js';
import Services from './Services.js';
function App() {
  const [content, setContent] = useState(<Homepage />);
  return (
    <div className="App">
      <nav className="nav">
        <ul>
          <li onClick={() => setContent(<Homepage />)}>Naslovna</li>
          <li onClick={() => setContent(<About />)}>O nama</li>
          <li onClick={() => setContent(<Services />)}>Usluge</li>
          <li onClick={() => setContent(<Practice />)}>Iz naše prakse</li>
          <li onClick={() => setContent(<Questions />)}>Najčešća Pitanja</li>
          <li onClick={() => setContent(<Contact />)}>Kontakt</li>
          <li onClick={() => setContent(<Gallery />)}>Galerija</li>
          <li>
            <select >
              <option value="en">English</option>
              <option value="sr">Srpski</option>
            </select>
            Sr
          </li>
        </ul>
      </nav>
      {content}
      <Footer />
    </div>
  );
}

export default App;
