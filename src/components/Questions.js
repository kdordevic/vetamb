import React from 'react';
import { useTranslation } from "react-i18next";
import qanda from "./qanda.js";
import { i18n } from "./App.js"; 
import "../style/Questions.css";

function Questions() {

  const example = qanda.map((article) => {
    const { id } = article;
    const translatedQ = i18n.t(article.question);
    const translatedA = i18n.t(article.answer);

    return (
      <section key={id}>
        <p>{translatedQ}</p>
        <p>{translatedA}</p>
      </section>
    );
  });
  const { t } = useTranslation();
    return (
      <main className="questions">
        <div className="questions-photo"></div>
        <div className="questions-text">
          <h1>{t("pitanja naslov")}</h1>
          {example}
        </div>
      </main>
    );
}

export default Questions
