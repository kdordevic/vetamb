import React from 'react';
import { useTranslation } from "react-i18next";
import "mapbox-gl/dist/mapbox-gl.css";
import "../style/Contact.css";
import Map from "./Map";
import ContactUs from "./ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Contact() {
    const { t } = useTranslation();
    return (
      <motion.main
        className="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1>{t("contact title")}</h1>

        <section className="contact-info">
          <p>{t("formular tekst")}</p>
          <p>{t("adresa")}</p>
          <p>{t("telefon")}</p>
          <p>{t("e-mail")}</p>
          <div className="social soc-cont">
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
        </section>
        <section className="map-form">
          <ContactUs />
          <div className="map">
            <Map />
          </div>
        </section>
      </motion.main>
    );
}

export default Contact
