import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./Contact.js";
import Gallery from "./Gallery.js";
import Practice from "./Practice.js";
import About from "./About.js";
import Privacy from "./Privacy.js";
import Homepage from "./Homepage.js";
import Questions from "./Questions.js";
import Services from "./Services.js";
// import Footer from "./Footer.js";
import LanguageSwitcher from "./LanguageSwitcher";
import "./style/Vet.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSquareFacebook,
//   faSquareInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

function Vet() {
  const { t } = useTranslation();
  const [content, setContent] = useState(<Homepage />);
  const home = () => setContent(<Homepage />);
  const about = () => setContent(<About />);
  const services = () => setContent(<Services />);
  const practice = () => setContent(<Practice />);
  const questions = () => setContent(<Questions />);
  const contact = () => setContent(<Contact />);
  const gallery = () => setContent(<Gallery />);
  const privacy = () => setContent(<Privacy />);
  const [toogle, setToogle] = useState(true);
  const menuToogle= () => {
     setToogle(!toogle);
  };
  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noreferrer");
  // };
    return (
      <div>
        <div className={toogle ? "big-screen-nav" : "small-screen-nav"}>
          <div className={toogle ? "menu" : "no-menu"} onClick={menuToogle}>
            <div className="menu-line-1"></div>
            <div className="menu-line-2"></div>
            <div className="menu-line-3"></div>
          </div>
          <nav className="nav">
            <ul className="main-nav" onClick={menuToogle}>
              <li onClick={home}>{t("Homepage")}</li>
              <li onClick={about}>{t("About")}</li>
              <li onClick={services}>{t("Services")}</li>
              <li onClick={practice}>{t("Practice")}</li>
              <li onClick={questions}>{t("Questions")}</li>
              <li onClick={contact}>{t("Contact")}</li>
              <li onClick={gallery}>{t("Gallery")}</li>
            </ul>
            <div className="lang">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
        {content}
        <footer>
          <div className="call-us">
            <p>{t("footer question")}</p>
            <button onClick={contact}>{t("contact title")}</button>
          </div>
          <h3>{t("footer")}</h3>

          {/* <button className="social-icon"
            role="link"
            onClick={() => openInNewTab("https://instagram.com")}
          >
            {" "}
            <FontAwesomeIcon icon={faSquareInstagram} />
          </button>
          <button className="social-icon"
            role="link"
            onClick={() => openInNewTab("https://facebook.com")}
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </button>
          <button className="social-icon"
            role="link"
            onClick={() => openInNewTab("https://linkedin.com")}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </button> */}

          <div></div>
          <div className="policy">
            <span onClick={privacy}>{t("privacy")}  </span>
            <span className="copy"> &copy;  Lovevet.rs 2024</span>
          </div>
        </footer>
      </div>
    );
}

export default Vet
