import React from 'react';
import articles from './articles.js';
import { useTranslation } from "react-i18next";
import { i18n } from "./App.js"; 


function Practice() {
  const example = articles.map((article) => {
    const { img, id } = article;
    const translatedTitle = i18n.t(article.title);
    const translatedText = i18n.t(article.text);

    return (
      <section key={id}>
        <h3>{translatedTitle}</h3>
        <img src={img} alt="" />
        <p>{translatedText}</p>
      </section>
    );
  });
  const { t } = useTranslation();
   return (
      <main>
       <h1>{t("praksa tekst")}</h1>
        { example }
      </main>
    );
}

export default Practice
