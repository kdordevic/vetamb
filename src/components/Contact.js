import React from 'react';
import { useTranslation } from "react-i18next";
import "mapbox-gl/dist/mapbox-gl.css";
import "../style/Contact.css";
import Map from "./Map";
import Social from "./Social.js"
import ContactUs from "./ContactUs";
import { motion } from "framer-motion";
import Paw from "./Paw.js";


function Contact() {
    const { t } = useTranslation();
    return (
      <motion.main
        className="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1>
          {t("contact title")} <Paw />
        </h1>
        <section className="contact-info">
          <p>{t("formular tekst")}</p>
          <p>{t("radno vreme")}</p>
          <p>{t("adresa")}</p>
          {/* <p>{t("telefon")}</p> */}
          <a href="tel:+381606666381" className="tel">
            <p>{t("telefon")}</p></a>
          <a href="mailto:info@lovepet.rs" className="mailto">
            <p>{t("e-mail")}</p>
          </a>
          <Social />
        </section>
        <div className="contact-interior">
          <div className="contact-interior-1"></div>
          <div className="contact-interior-2"></div>
          <div className="contact-interior-3"></div>
        </div>
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
