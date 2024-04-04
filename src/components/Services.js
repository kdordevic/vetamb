import React from 'react';
import { useTranslation } from "react-i18next";
import "../style/Services.css";
import { motion } from "framer-motion";
import Paw from "./Paw.js";

function Services() {
    const { t } = useTranslation();
  return (
    <motion.main
      className="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1>
        {t("usluge naslov")}
        <Paw />
      </h1>
      <section>
        <motion.div
          className="services-text"
          initial={{
            x: 300,
          }}
          whileInView={{
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 1.2,
            },
          }}
        >
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 3")}</h4>
          <h4>{t("usluga 4")}</h4>
          <h4>{t("usluga 5")}</h4>
          <h4>{t("usluga 6")}</h4>
          <h4>{t("usluga 7")}</h4>
          <h4>{t("usluga 8")}</h4>
          <h4>{t("usluga 9")}</h4>
          <h4>{t("usluga 10")}</h4>
        </motion.div>
        <motion.div
          className="services-photo first-photo"
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
        ></motion.div>
      </section>
      <section>
        <motion.div
          className="services-photo second-photo"
          initial={{
            x: 300,
          }}
          whileInView={{
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 1.6,
            },
          }}
        ></motion.div>
        <motion.div
          className="services-text middle-text"
          initial={{
            x: -300,
          }}
          whileInView={{
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 0.8,
            },
          }}
        >
          <h4>{t("usluga 11")}</h4>
          <h4>{t("usluga 12")}</h4>
          <h4>{t("usluga 13")}</h4>
          <h4>{t("usluga 14")}</h4>
          <h4>{t("usluga 15")}</h4>
          <h4>{t("usluga 16")}</h4>
          <h4>{t("usluga 17")}</h4>
          <h4>{t("usluga 18")}</h4>
          <h4>{t("usluga 19")}</h4>
          <h4>{t("usluga 20")}</h4>
        </motion.div>
      </section>
      <section>
        <motion.div
          className="services-text"
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
        >
          <h4>{t("usluga 21")}</h4>
          <h4>{t("usluga 22")}</h4>
          <h4>{t("usluga 23")}</h4>
          <h4>{t("usluga 24")}</h4>
          <h4>{t("usluga 25")}</h4>
          <h4>{t("usluga 26")}</h4>
          <h4>{t("usluga 27")}</h4>
          <h4>{t("usluga 28")}</h4>
          <h4>{t("usluga 29")}</h4>
          <h4>{t("usluga 30")}</h4>
        </motion.div>
        <motion.div
          className="services-photo third-photo"
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
        ></motion.div>
      </section>
    </motion.main>
  );
}

export default Services
