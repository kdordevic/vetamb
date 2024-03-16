// import React from 'react';
import React, { useState, useEffect } from "react";
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
import { motion, useTransform, useScroll,useAnimation } from "framer-motion";
import { useRef } from "react";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};


function Homepage() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: scrollY / 2 });
  }, [scrollY, controls]);

  
   const targetRef = useRef(null);

   const { scrollYProgress } = useScroll({
     target: targetRef,
   });

  const x = useTransform(scrollYProgress, [0, 1], ["-1px", "-1250px"]);
  


    const { t } = useTranslation();
    return (
      <motion.main
        className="homepage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div style={{ minHeight: "10vh" }}>
            <motion.div
              animate={controls}
              initial={{ opacity: 0, y: 0 }}
              className="vertical-slider"
            >
              <div className="vertical-slide"></div>
              <div className="vertical-slide"></div>
              <div className="vertical-slide"></div>
              <div className="vertical-slide"></div>
              <div className="vertical-slide"></div>
              <div className="vertical-slide"></div>
              <div className="vertical-slide"></div>
              <div className="vertical-slide"></div>
            </motion.div>
          </div>
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

          <div ref={targetRef} className="slides">
            <div className="sticky">
              <motion.div
                style={{ x }}
                className="home-slide slide-one"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-two"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-three"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-four"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-five"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-six"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-seven"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-one"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-two"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-three"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-four"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-five"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-six"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-seven"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-one"
              ></motion.div>
              <motion.div
                style={{ x }}
                className="home-slide slide-two"
              ></motion.div>
            </div>
          </div>
          <div className="heading-home">
            <div className="circle">
              <div className="icon">
                <FontAwesomeIcon icon={faPaw} />
              </div>
            </div>
            <h1>{t("homepage tekst")}</h1>
            <h2>{t("homepage tekst1")}</h2>
          </div>

          <section className="contact-home">
            <p>{t("adresa")}</p>
            <p>{t("telefon")}</p>
            <p>{t("e-mail")}</p>
          </section>
        </div>

        {/* <div className="deco-1"></div>
        <div className="deco-2"></div>
        <div className="deco-3"></div> */}
      </motion.main>
    );
}

export default Homepage
