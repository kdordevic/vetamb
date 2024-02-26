import React from 'react';
import { useTranslation } from "react-i18next";
import "../style/Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Homepage() {
    const { t } = useTranslation();
    return (
      <main className="homepage">
        <div className="container">
          <div className="social">
            <button
              className="social-icon"
              role="link"
              onClick={() => openInNewTab("https://instagram.com")}
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </button>
            <button
              className="social-icon"
              role="link"
              onClick={() => openInNewTab("https://facebook.com")}
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </button>
            <button
              className="social-icon"
              role="link"
              onClick={() => openInNewTab("https://linkedin.com")}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </div>

          <div className="circle">
            <div className="icon">
              <FontAwesomeIcon icon={faPaw} />
            </div>
          </div>

          <h1>{t("homepage tekst")}</h1>
          <h2>{t("homepage tekst1")}</h2>
          <section className="contact-home">
            <p>{t("adresa")}</p>
            <p>{t("telefon")}</p>
            <p>{t("e-mail")}</p>
          </section>
        </div>
      </main>
    );
}

export default Homepage
