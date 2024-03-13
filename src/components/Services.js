import React from 'react';
import { useTranslation } from "react-i18next";
import "../style/Services.css";
import { motion } from "framer-motion";

function Services() {
    const { t } = useTranslation();
  return (
    <motion.main
      className="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1>{t("usluge naslov")}</h1>
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
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
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
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
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
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
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
