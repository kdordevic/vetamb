import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import "../style/Services.css";
import { motion } from "framer-motion";
import Paw from "./Paw.js";
import Modal from "react-modal";
import servicesData from "../files/servicesData.js";

Modal.setAppElement("#root");

function Services() {
    const { t } = useTranslation();
    const [selectedService, setSelectedService] = useState(null);

    const serviceGroups = {
      first: servicesData.filter((service) => service.group === "first"),
      second: servicesData.filter((service) => service.group === "second"),
      third: servicesData.filter((service) => service.group === "third"),
    };

    const renderServiceItem = (service) => (
      <button
        key={service.id}
        type="button"
        className={`service-trigger${service.id === 1 || service.id === 6 || service.id === 14 || service.id === 19 || service.id === 26 || service.id === 27 || service.id === 28 ? " service-trigger--bold" : ""}`}
        onClick={() => setSelectedService(service)}
      >
        <span>{t(service.titleKey)}</span>
      </button>
    );

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
          {serviceGroups.first.map(renderServiceItem)}
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
          {serviceGroups.second.map(renderServiceItem)}
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
          {serviceGroups.third.map(renderServiceItem)}
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
      <Modal
      //  isOpen={Boolean(selectedService)}
      //  onRequestClose={() => setSelectedService(null)}
      //  overlayClassName="service-modal-overlay"
       // className="service-modal"
      >
        {selectedService && (
          <>
            <button
              type="button"
              className="service-modal-close"
              onClick={() => setSelectedService(null)}
            >
              {t("zatvori")}
            </button>
            <div className="service-modal-header">
              <h2>{t(selectedService.titleKey)}</h2>
            </div>
            <p>{t(selectedService.descriptionKey)}</p>
          </>
        )}
      </Modal>
    </motion.main>
  );
}

export default Services
