import React from "react";
import { useTranslation } from "react-i18next";
import "../style/Homepage.css";
import { motion } from "framer-motion";
import VerticalSlider from "./VerticalSlider.js";
import Social from "./Social.js"

function Homepage() {
  

    const { t } = useTranslation();
  return (
    <div>
      <Social/>
      <motion.main
        className="homepage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <VerticalSlider />

          <div className="heading-home">
            <div className="logo1"></div>
            <h2>{t("homepage tekst1")}</h2>
            <h1>{t("homepage tekst")}</h1>
          </div>
          <section className="contact-home"></section>
        </div>
        <div className="deco-1">
          <motion.div
            initial={{
              x: -300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.5,
              },
            }}
            className="deco-1-text"
          >
            <h3>{t("adresa")}</h3>
            <h4>Dobrodošli!</h4>
          </motion.div>
          <motion.div
            className="deco-1-img"
            initial={{
              borderRadius: "0px",
            }}
            whileInView={{
              borderRadius: "550px",
              transition: {
                duration: 1,
              },
            }}
            style={{
              backgroundImage: `url("././photos/interior3.jpg")`,
              backgroundPosition: "center",
            }}
          ></motion.div>
        </div>
        <div className="deco-2">
          <motion.div
            className="deco-2-img"
            style={{
              backgroundImage: `url("././photos/christine-sook-T6IvCq0OQKk-unsplash.jpg")`,
              backgroundPosition: "top",
            }}
            initial={{
              borderRadius: "0px",
            }}
            whileInView={{
              borderRadius: "600px",
              transition: {
                duration: 1,
              },
            }}
          ></motion.div>
          <motion.div
            className="deco-2-text"
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.5,
              },
            }}
          >
            <h3>{t("telefon")}</h3>
            <h4>Čekamo vas!!</h4>
            <h3>{t("e-mail")}</h3>
          </motion.div>
        </div>
        {/* <div className="deco-3"></div>  */}
      </motion.main>
    </div>
  );
}

export default Homepage
