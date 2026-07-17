import React from "react";
import { useTranslation } from "react-i18next";
import qanda from "../files/qanda.js";
import "../style/Questions.css";
import { motion } from "framer-motion";
import Paw from "./Paw.js";

function Questions() {
  const { t } = useTranslation();
  const faqItems = qanda.map(({ id, photo, question, answer }) => {
    const translatedQuestion = t(question);
    const translatedAnswer = t(answer);

    return (
      <motion.section
        key={id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="faq-photo"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        />
        <p className="question">{translatedQuestion}</p>
        <hr />
        <p className="answer">{translatedAnswer}</p>
      </motion.section>
    );
  });

  return (
    <motion.main
      className="questions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="questions-text">
        <h1>
          {t("pitanja naslov")}
          <Paw />
        </h1>
        <div className="faq">{faqItems}</div>
      </div>
    </motion.main>
  );
}

export default Questions;
