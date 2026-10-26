import React from 'react';
import { useTranslation } from "react-i18next";
import "../style/About.css";
import { motion } from "framer-motion";
import Paw from "./Paw.js";

function About() {
  const { t } = useTranslation();
    return (
      <motion.main
        className="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <section>
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
            className="photo-about first-photo"
          ></motion.div>
          <motion.div
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="text-about first-text"
          >
            <h1>
              {t("o nama")}
              <Paw />
            </h1>
            <p>{t("tekst o nama 1")}</p>
            <p>{t("tekst o nama 2")}</p>
            <p>{t("tekst o nama 3")}</p>
          </motion.div>
        </section>
        <section>
          <motion.div
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.8,
              },
            }}
            className="text-about second-text"
          >
            <p>
              <Paw />
            </p>
            <p>{t("tekst o nama 4")}</p>
            <p>{t("tekst o nama 5")}</p>
            <p>{t("tekst o nama 6")}</p>
            {/* <div className="logo-deco"></div> */}
          </motion.div>

          <motion.div
            initial={{
              x: -300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="photo-about second-photo"
          ></motion.div>
        </section>
         <section>
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
            className="photo-about third-photo"
          ></motion.div>
          <motion.div
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="text-about first-text"
          >
           <p>
              <Paw />
            </p>
            <p>{t("tekst o nama 7")}</p>
            <p>{t("tekst o nama 8")}</p>
            <p>{t("tekst o nama 9")}</p>
          </motion.div>
        </section>
        <section>
          <motion.div
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.8,
              },
            }}
            className="text-about second-text"
          >
             <p>
              <Paw />
            </p>
            <p>{t("tekst o nama 10")}</p>
            <p>{t("tekst o nama 11")}</p>
            <p>{t("tekst o nama 12")}</p>
         
          </motion.div>

          <motion.div
            initial={{
              x: -300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="photo-about fourth-photo"
          ></motion.div>
        </section>
          <section>
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
            className="photo-about fifth-photo"
          ></motion.div>
          <motion.div
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="text-about first-text"
          >
           <p>
              <Paw />
            </p>
            
            <p>{t("tekst o nama 13")}</p>
            <p>{t("tekst o nama 14")}</p>
            <p>{t("tekst o nama 15")}</p>
          </motion.div>
        </section>
        <section>
          <motion.div
            initial={{
              x: 300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.8,
              },
            }}
            className="text-about second-text"
          >
            <p>
              <Paw />
            </p>
            <p>{t("tekst o nama 16")}</p>
            <p>{t("tekst o nama 17")}</p>
            <p>{t("tekst o nama 18")}</p>
          
          </motion.div>

          <motion.div
            initial={{
              x: -300,
            }}
            whileInView={{
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1,
              },
            }}
            className="photo-about sixth-photo"
          ></motion.div>
        </section>
      </motion.main>
      
    );
}

export default About
