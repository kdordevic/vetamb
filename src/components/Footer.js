import React from 'react';
import { useTranslation } from "react-i18next";
import "../style/Footer.css";
// import { motion } from "framer-motion";
//  import Animation from "./Animation.js";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="call-us">
        <p>{t("footer question")}</p>
        {
          <button>
            <a href="./contact">{t("Contact")}</a>
          </button>
        }
      </div>
      <div className="footer-info">
        <div className="footer-groups one">
          <div className="footer-1">
            <h5>{t("footer1")}</h5>
          </div>
          <div className="footer-2">
            <h5>{t("footer2")}</h5>
            <p>Ambulanta 1: Adresa: Telefon:</p>
            <p>Ambulanta 2: Adresa: Telefon:</p>
            <p>Ambulanta 3: Adresa: Telefon:</p>
          </div>
        </div>
        <div className="footer-groups two">
          <div className="footer-3">
            <h5>{t("footer3")}</h5>
            <p>Lab 1: Adresa: Telefon:</p>
            <p>Lab 2: Adresa: Telefon:</p>
            <p>Lab 3: Adresa: Telefon:</p>
          </div>

          <div className="footer-4">
            <h5>{t("footer4")}</h5>
          </div>
        </div>
      </div>
      <div className="svg-img">
        {/* <img src="././svg/dog.svg" alt="svg" /> */}

         {/* <Animation />  */}
      </div>
      <div className="policy">
        <a href="./privacy">{t("privacy")}</a>
        <span className="copy"> &copy; Lovepet.rs 2024</span>
      </div>
    </footer>
  );
}

export default Footer
