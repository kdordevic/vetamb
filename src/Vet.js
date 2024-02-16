import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact.js";
import Gallery from "./Gallery.js";
import Practice from "./Practice";
import About from "./About.js";
import Homepage from "./Homepage.js";
import Questions from "./Questions.js";
import Services from "./Services.js";
import Footer from "./Footer.js";
import LanguageSwitcher from "./LanguageSwitcher";
import "./style/Vet.css";

function Vet() {
    const { t } = useTranslation();
  const [content, setContent] = useState(<Homepage />);
  const [toogle, setToogle] = useState(true)
   const menuToogle= () => {
     setToogle(!toogle);
   };
    return (
      <div>
        <div className={toogle ? "big-screen-nav" : "small-screen-nav"}>
          <div className={toogle ? "menu" : ""} onClick={menuToogle}></div>
          <nav className="nav">
            <ul onClick={menuToogle}>
              <li onClick={() => setContent(<Homepage />)}>{t("Homepage")}</li>
              <li onClick={() => setContent(<About />)}>{t("About")}</li>
              <li onClick={() => setContent(<Services />)}>{t("Services")}</li>
              <li onClick={() => setContent(<Practice />)}>{t("Practice")}</li>
              <li onClick={() => setContent(<Questions />)}>
                {t("Questions")}
              </li>
              <li onClick={() => setContent(<Contact />)}>{t("Contact")}</li>
              <li onClick={() => setContent(<Gallery />)}>{t("Gallery")}</li>
            </ul>
            
              <div className='lang'>
                <LanguageSwitcher />
              </div>
          
          </nav>
        </div>
        {content}
        <Footer />
      </div>
    );
}

export default Vet
