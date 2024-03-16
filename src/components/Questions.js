import React from 'react';
import { useTranslation } from "react-i18next";
import qanda from "./qanda.js";
import { i18n } from "./App.js"; 
import "../style/Questions.css";
import { motion } from "framer-motion";

function Questions() {

  const example = qanda.map((article) => {
    const { id ,photo} = article;
    const translatedQ = i18n.t(article.question);
    const translatedA = i18n.t(article.answer);
   

    return (
      <motion.section
      
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        key={id}
      >
        <div
          className="faq-photo"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        >
          {" "}
        </div>
        <p className="question">{translatedQ}</p>
        <hr />
        <p className="answer">{translatedA}</p>
      </motion.section>
    );
  });
  const { t } = useTranslation();
    return (
      <motion.main
        className="questions"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* <div className="questions-photo"></div> */}
        <div className="questions-text">
          <h1>{t("pitanja naslov")}</h1>
          <div className="faq">{example}</div>
        </div>
      </motion.main>
    );
}

export default Questions
